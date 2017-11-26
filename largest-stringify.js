//
// This program figures out what is the largets JSON file we can stringify.
//
//
// Make sure to run this with '--expose-gc':
//
//      node --expose-gc largest-stringify.js
//

const path = require('path');
const fs = require('fs');

//
// Test data from here:
//
// https://josh.zeigler.us/technology/web-development/how-big-is-too-big-for-json
//
const testData = {
    "ACCOUNT_NUMBER":"1234567890",
    "CUSTOMER_NAME":"ACME Products and Services, Inc.",
    "ADDRESS":"123 Main Street",
    "CITY":"Albuquerque",
    "STATE":"NM",
    "ZIP":"87101-1234"
};

var startingCount = 1636800; // Maximum num elements of testData that can be stringified.
//var startingCount = 1636801; // One beyond the maximmum!
var increment = 1;

var dataToOutput = [];
for (var i = 0; i < startingCount; ++i) {
    dataToOutput.push(testData);
}

var outputJsonFile = function () {
    global.gc(); // Make sure we have reclaimed memory to build the string.

    var json = JSON.stringify(dataToOutput);
    fs.writeFileSync('./output/big-json-file.json', json);

    console.log("Output JSON array with length " + dataToOutput.length);
};

var outputUpToLimits = function () {

    while (true) {
        outputJsonFile();

        for (var i = 0; i < increment; ++i) {
            dataToOutput.push(testData);
        }
    }
};


console.log("Increment " + increment);

while (true) {
    try { 
        outputUpToLimits(); 
    }
    catch (err) {
        console.error(err);

        if (increment <= 8) {
            break; // Done
        }

        increment /= 2; // Reduce the increment and try to find the limits again.

        console.log("Increment " + increment);
    }
}

