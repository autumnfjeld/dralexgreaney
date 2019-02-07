var fs = require('fs');
var pug = require('pug');

// Compile the template to a function string for use with magnifiPop in reasearchController
var templateName = 'researchProjectTemplateFunc',
    pugSrcFile = 'src/pug/research-project.pug',
    pugFnOutFile = 'src/js/' + templateName + '.js';

console.log('STARTING: compile-pug.js script to create pug template function');
var jsFunctionString = pug.compileFileClient(pugSrcFile, {name: templateName});

// Format a js file to allow pug template function to be contained in an app module
// This feels so wierd and hacky, but it works.  TODO: investigate alternatives
var pugCompile = '(function(window) {' +
    '"use strict";' +
    jsFunctionString +
    'window.app = window.app || {};' +
    'window.app.' + templateName + ' = ' + templateName + ';' +
    '}(window));';

// Output javascript code to js file for client usage
fs.writeFileSync(pugFnOutFile, pugCompile);
console.log('DONE: compile-pug.js  ', pugSrcFile, 'compiled and written to ', pugFnOutFile);

// Could do the reverse and set up a js component file that requires the functionString and then ?????
// module.exports = pug.compileFileClient('../src/research-pages/research-page.pug', {name: "researchPagePugFunc"});


// module.exports = {
//     compilePugResearchFunc: compilePugResearchFunc
// };
//
// require('make-runnable');