var fs = require('fs');
var pug = require('pug');

// Compile the template to a function string
var jsFunctionString = pug.compileFileClient('../src/research-pages/research-page.pug', {name: "researchPagePugFunc"});

// Format a js file to allow pug template function to be contained in an app module
// This feels so wierd and hacky, but it works.  TODO: investigate alternatives
var pugCompile = '(function(window) {' +
    '"use strict";' +
    jsFunctionString +
    'window.app = window.app || {};' +
    'window.app.pugCompile = window.app.pugCompile || {};' +
    'window.app.pugCompile.researchPagePugFunc = researchPagePugFunc;' +
    '}(window));';

// Output javascript code to js file for client usage
fs.writeFileSync("pugTemplateFunctions.js", pugCompile);

// Could do the reverse and set up a js component file that requires the functionString and then ?????
// module.exports = pug.compileFileClient('../src/research-pages/research-page.pug', {name: "researchPagePugFunc"});