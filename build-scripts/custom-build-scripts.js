var fs = require('fs');
var path = require('path');
var pug = require('pug');



/** Config variables */
var projectRootDir = path.join(__dirname, '..');
var jsonDataDir = projectRootDir + '/src/json-data/';

/*************************************************************************************************
 * Build the project data into a js object: Reads project json data files and builds
 * @return {Promise}
 ************************************************************************************************/

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
                        console.info('fileName:', fileName, fileNameToCamelCase(fileName));
                        sectionName = fileNameToCamelCase(fileName);
                        siteContent[sectionName] = JSON.parse(fs.readFileSync(jsonDataDir + fileName, 'utf8'));
                    }
                });
                console.info('Success combining json data.  siteContent sections:', Object.keys(siteContent), '\n');
                resolve(siteContent);
                // console.log('siteContent.about.summary', siteContent.about.summary);
            }
        });

    });
}



/*************************************************************************************************
 * Compile all pug templates with data into index.html
 ************************************************************************************************/

/**
 * Create the public/index.html file
 */
function compilePugWithContent() {

    getJsonContent()
        .then(function (siteContent) {
            createIndexHtml(siteContent);
        }).catch(function (reason) {
            console.info('getJsonContent() fail', reason);
        });

    function createIndexHtml(siteContent) {
        var pugTemplate = projectRootDir + '/src/pug/index.pug',
            indexBuildFile = projectRootDir + '/public/index.html';
        // var html = pug.renderFile('../src/pug/index.pug', siteContent, null);
        // Node.js-style callback receiving the rendered results. This callback is called synchronously.
        pug.renderFile(pugTemplate, siteContent, function (err, html) {
            // console.log(siteContent.about);
            if (err) {
                console.error('Pug file did not compile', err);
            } else {
                console.info('\nPug file compiled and written to ', indexBuildFile);
                // TODO  make async for error
                fs.writeFileSync(indexBuildFile, html);
            }
            // Cleanup, as pug is adding this prop to locals object
            delete siteContent.filename;
        });
    }
}


/***********************************************************************************************
 * Create a javascript data store that will supply data to the client-side pug functions
 * Produces a js module file
 * Needed models:
 *  - Research data models in research-project.pug for dynamic creation of research pop-up or other dynamic content
 *  - This should run with json file watchers
 *
 /************************************************************************************************/


function createDataModel() {
    console.info('~~~~~~~~~~~~~ STARTING: createDataModel ~~~~~~~~~~~~~');
    var dataStoreFile = projectRootDir + '/src/js/data-store.js';

    getJsonContent()
        .then(function (siteContent) {
            createAppDataModule(siteContent);
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



/***********************************************************************************************
 *  Process publication data
 ***********************************************************************************************/

/**
 * Define featured publications
 */
var featuredPublications = [
    'Wu_2019_NatEn_Grotthuss',
    'Bommier_2018_ChemMat_Na_HardCarbon',
    'Truszkowska_2018_JMPS_AnisotropicElasticityDEM',
    'Harter_2017_JHT_BTEinUO2withXe',
    'Manion_2016_DaltonTrans_DesignOFlexibleLinkers'
];

/**
 * Identify featured publications
 * @param entryKey
 * @return {boolean}
 */
function isFeaturedPublication(entryKey) {
    return featuredPublications.some(function (featuredEntry) {
        return featuredEntry === entryKey;
    });
}

/**
 * Prior to running this the raw .bib file is processed via third party parser Bib2JSON.js
 *
 * Process .json publication file:
 *   - change capitinilation of some content
 *   - make capitilizaion of Field keys uniform
 *   - seperate featured publications from the rest for UI display.
 */
function processPublicationEntries() {
    // const outputJsonFile = 'src/json-data/publications.json';
    const publicationsJsonFile = 'src/json-data/publications.json',
        publications = {
            featured: [],
            theRest: []
        };

    fs.readFile(publicationsJsonFile, 'utf-8', function (err, data) {
        if (err) {
            console.error('Error', err);
        } else {
            var bibData = JSON.parse(data);
            bibData.forEach(function (pub) {

                // Fix capitalization of the content where needed
                if (pub.Fields.Journal) {
                    pub.Fields.Journal = pub.Fields.Journal.replace(/\w\S*/g, function (txt) {
                        // console.log('txt', txt);
                        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                    });
                }
                if (pub.Fields.Booktitle) {
                    pub.Fields.Booktitle = pub.Fields.Booktitle.replace(/\w\S*/g, function (txt) {
                        // console.log('txt', txt);
                        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                    });
                }
                if (pub.Fields.Month) {
                    pub.Fields.Month = pub.Fields.Month.replace(/\w\S*/g, function (txt) {
                        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                    });
                }

                // Ensure all keys in the Field object are Capitalized
                var keys = Object.keys(pub.Fields);
                keys.forEach(function (key) {
                    // keyCapitalized = key.charAt(0).toUpperCase() + key.slice(1)
                    if (key !== key.toLowerCase()) {
                        pub.Fields[key.toLowerCase()] = pub.Fields[key];
                        // delete the old key
                        delete pub.Fields[key];
                    }
                });

                // Separate featured publications

                //console.info('pub', pub.EntryKey);
                if (isFeaturedPublication(pub.EntryKey)) {
                    publications.featured.push(pub);
                } else {
                    publications.theRest.push(pub);
                }

            });
        }

        console.info('Number of featured publications sorted: ', publications.featured.length, ' out of ', featuredPublications.length, ' specified');
        // Output correct .json file
        fs.writeFile(publicationsJsonFile, JSON.stringify(publications), function (err) {
            if (err) {
                console.error('Error writing file', err);
            } else {
                console.info('Success! publication json data written to ', publicationsJsonFile);
                // TODO eliminate manual check write over plublications.json
                console.info('Manually check this file and then rename to publications.json');
            }
        });
    });

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
 * Ex: >node ./custom-build-scripts.js compilePugWithContent
 ********************************************************************************************/

module.exports = {
    compilePugWithContent: compilePugWithContent,
    createDataModel: createDataModel,
    processPublicationEntries: processPublicationEntries
};

require('make-runnable');