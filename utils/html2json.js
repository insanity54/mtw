var fs = require('fs');


var inputFile = process.argv[2];
var outputFile = process.argv[3];
if (!inputFile && !outputFile) {
    console.log(' USAGE: html2json.js INPUTFILE OUTPUTFILE');
    throw new Error('no args received');
}


var data = fs.readFileSync(inputFile, 'utf8');
var json = JSON.stringify(data);

var result = fs.writeFileSync(outputFile, json, 'utf8');

if (result !== 0) throw Error('could not write file ' + result);

