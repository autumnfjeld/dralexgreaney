var fs = require('fs');
var pug = require('pug');


/**************************************************************************
 * Build single json data file to feed into pug compilation
 *************************************************************************/

var projectRootDir = "/Users/afjeld/Documents/Aut/dralexgreaney/";
var jsonDataDir = projectRootDir + 'src/json-data/';
var siteContent = {};

fs.readdir(jsonDataDir, function(err, files) {
    if (err) {
        console.error('Error reading directory', err);
    } else {
        console.info('Assembling json data from', jsonDataDir);
        var sectionName = null;
        files.forEach( function(fileName) {
            // Read only json
            if ( fileName.slice(-4) === 'json') {
                // console.log('fileName:', fileName, fileNameToCamelCase(fileName));
                sectionName = fileNameToCamelCase(fileName);
                siteContent[sectionName] = JSON.parse(fs.readFileSync(jsonDataDir + fileName, 'utf8'));
            }
        });
        console.log('Success combing json data.  siteContent sections:', Object.keys(siteContent), '\n');
        // console.log('siteContent.about.summary', siteContent.about.summary);
        compilePugWithContent(siteContent);
        createDataStoreFile(siteContent);
    }
});


/**************************************************************************
 * Compile json and pug template and write to index.html
 *************************************************************************/

function compilePugWithContent(content) {
    if (!content) {
        console.error('compilePugWithContent: json content missing');
        return;
    }
    var pugTemplate = projectRootDir + 'src/pug/index.pug',
        indexBuildFile = projectRootDir + 'public/index.html';
    // var html = pug.renderFile('../src/pug/index.pug', siteContent, null);
    // Node.js-style callback receiving the rendered results. This callback is called synchronously.
    pug.renderFile(pugTemplate, content, function(err, html){
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



/**************************************************************************
 * Create a javascript data store that will supply data to the client-side application Models
 * Needed models:
 *   - Research model for dynamic creation of research pages or other dynamic content
 *************************************************************************/

var dataStoreFile = projectRootDir + 'src/dataStore.js';
function createDataStoreFile(content){
    if (!content) {
        console.error('compilePugWithContent: json content missing');
        return;
    }
    console.info(' /n site Content has these sections', Object.keys(content));
    console.info('Inserting siteContent into file ', dataStoreFile);

    var dataStoreJavascript = '(function(window) {' +
        '"use strict";' +
        ' var dataStore = ' + JSON.stringify(siteContent.researchProjects) + ';' +
        'window.app = window.app || {};' +
        'window.app.dataStore = dataStore;' +
        '}(window));';

    fs.writeFileSync(dataStoreFile, dataStoreJavascript, 'utf8');

}



/***********************************************
 * Helper Functions
 **********************************************/

/**
 *
 * @param fileName
 */
function fileNameToCamelCase(fileName) {
    var camelCase = fileName.slice(0,-5).replace(/-([a-z])/g, function (g) {
        return g[1].toUpperCase(); });
    return camelCase;
}