var fs = require('fs');
var pug = require('pug');


/** Config variables */
var projectRootDir = "/Users/afjeld/Documents/Aut/dralexgreaney/";
var jsonDataDir = projectRootDir + 'src/json-data/';

/**
 * Build the project data into a js object: Reads project json data files and builds
 * @return {Promise}
 */
function getJsonContent() {
    var siteContent = {};
    return new Promise(function (resolve, reject) {
        fs.readdir(jsonDataDir, function (err, files) {
            if (err) {
                console.error('Error reading directory', err);
                reject(err);
            } else {
                console.info('Assembling json data from', jsonDataDir);
                var sectionName = null;
                files.forEach(function (fileName) {
                    // Read only json files
                    if (fileName.slice(-4) === 'json') {
                        // console.log('fileName:', fileName, fileNameToCamelCase(fileName));
                        sectionName = fileNameToCamelCase(fileName);
                        siteContent[sectionName] = JSON.parse(fs.readFileSync(jsonDataDir + fileName, 'utf8'));
                    }
                });
                console.log('Success combing json data.  siteContent sections:', Object.keys(siteContent), '\n');
                resolve(siteContent);
                // console.log('siteContent.about.summary', siteContent.about.summary);
            }
        });

    });
}

/**
 * Compile all pug templates
 */
function compilePugWithContent() {

    getJsonContent()
        .then(function (siteContent) {
            createIndexHtml(siteContent)
        }).catch(function (reason) {
        console.log('getJsonContent() fail', reason);
    });

    function createIndexHtml(siteContent) {
        var pugTemplate = projectRootDir + 'src/pug/index.pug',
            indexBuildFile = projectRootDir + 'public/index.html';
        // var html = pug.renderFile('../src/pug/index.pug', siteContent, null);
        // Node.js-style callback receiving the rendered results. This callback is called synchronously.
        pug.renderFile(pugTemplate, siteContent, function (err, html) {
            // console.log(siteContent.about);
            if (err) {
                console.error('Pug file did not compile', err)
            } else {
                console.log('\nPug file compiled and written to ', indexBuildFile);
                // TODO  make async for error
                fs.writeFileSync(indexBuildFile, html);
            }
            // Cleanup, as pug is adding this prop to locals object
            delete siteContent.filename;
        });
    }
}


/**
 * Create a javascript data store that will supply data to the client-side application Models
 * A bit hacky: produces a js module file
 * Needed models:
 *   - Research model for dynamic creation of research pages or other dynamic content
 *
 */
function createDataStoreFile() {
    var dataStoreFile = projectRootDir + 'src/js/data-store.js';

    getJsonContent()
        .then(function (siteContent) {
            createAppDataModule(siteContent)
        }).catch(function (reason) {
        console.error('getJsonContent() fail', reason);
    });

    function createAppDataModule(siteContent) {
        console.info(' /n site Content has these sections', Object.keys(siteContent));

        var dataStoreJavascript = '(function(window) {' +
            '"use strict";' +
            ' var dataStore = ' + JSON.stringify(siteContent.researchProjects) + ';' +
            'window.app = window.app || {};' +
            'window.app.dataStore = dataStore;' +
            '}(window));';

        //TODO make async for error handling
        fs.writeFileSync(dataStoreFile, dataStoreJavascript, 'utf8');
        console.info('Inserted siteContent into file ', dataStoreFile);
    }

}


/********************************************************************************************
 * Helper Functions
 ********************************************************************************************/

/**
 * Converts kebab-case to camelCase
 * @param fileName
 */
function fileNameToCamelCase(fileName) {
    var camelCase = fileName.slice(0, -5).replace(/-([a-z])/g, function (g) {
        return g[1].toUpperCase();
    });
    return camelCase;
}

/********************************************************************************************
 * Export Functions
 * make-runnable module makes export functions accessible via command line: >node filepath functionName args
 * Ex: >node ./pug-json-compiler.js compilePugWithContent
 ********************************************************************************************/

module.exports = {
    compilePugWithContent: compilePugWithContent,
    createDataStoreFile: createDataStoreFile
};

require('make-runnable');