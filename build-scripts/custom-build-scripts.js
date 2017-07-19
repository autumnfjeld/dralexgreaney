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
function createDataModel() {
    var dataStoreFile = projectRootDir + 'src/js/data-store.js';

    getJsonContent()
        .then(function (siteContent) {
            createAppDataModule(siteContent)
        }).catch(function (reason) {
        console.error('getJsonContent() fail', reason);
    });

    function createAppDataModule(siteContent) {
        console.info(' /n site Content has these sections', Object.keys(siteContent));

        var dataStoreJavascript =
            '(function(window) {' +
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


/**
 *
 * Fix capitalization in any of the publication entries that originate from .bib file
 * Need to manually change pub.Fields.XXX if other fields need correction
 */
function fixBibCapitalization(){
    fs.readFile('src/json-data/publications.json', 'utf-8', function(err, data) {
        if (err) {
            console.log('Error', err);
        } else {
            var bibData = JSON.parse(data);
            bibData.forEach( function(pub) {
                if (pub.Fields.Journal) {
                    pub.Fields.Journal = pub.Fields.Journal.replace(/\w\S*/g, function(txt){
                        console.log('txt', txt);
                        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                    });
                }
                if (pub.Fields.Booktitle) {
                    pub.Fields.Booktitle = pub.Fields.Booktitle.replace(/\w\S*/g, function(txt){
                        console.log('txt', txt);
                        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                    });
                }
                if (pub.Fields.Month) {
                    pub.Fields.Month = pub.Fields.Month.replace(/\w\S*/g, function(txt){
                        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                    });
                }
                // Ensure all keyMost keys in the Field object are Capitalized, a few need to be capitalized
                var keys = Object.keys(pub.Fields);
                keys.forEach(function(key) {
                    // keyCapitalized = key.charAt(0).toUpperCase() + key.slice(1)
                    if (key !== key.toLowerCase()) {
                        pub.Fields[key.toLowerCase()] = pub.Fields[key]
                        delete pub.Fields[key] // delete the old key
                    }
                });
                console.log('pub', pub);

            })

        }
        fs.writeFile('src/json-data/publications-fixed.json', JSON.stringify(bibData), function(err){
            if (err) {
                console.log('Error writing file', err);
            } else {
                console.log('Success file written');
            }
        })
    });

}

function seperateFeaturedPublications(){
    var featuredPublications = [
        'Li_2017_AdEnergyMat_DopedHardCarbonAnodes',
        'Wang_2017_AngewChemi_Hydronium',
        'Oliveira_2017_PRE_GreenKuboIntegrationError',
        'Truszkowska_2016_CompChemEng_MultiscaleLBM',
        'Manion_2016_DaltonTrans_DesignOFlexibleLinker'
    ];

    //TODO Decide on how to seperate feature pubs - into single json with { "featured" : [], "theRest": []}  Think I like this


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
    createDataModel: createDataModel,
    fixBibCapitalization: fixBibCapitalization
};

require('make-runnable');