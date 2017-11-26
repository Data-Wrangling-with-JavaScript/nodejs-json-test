//
// Example to output a large JSON file using a stream.
// This allows us to write a file larger than can be achieved with JSON.stringify.
//

const bfj = require('bfj');
const fs = require('fs');

const testData = {
    "ACCOUNT_NUMBER":"1234567890",
    "CUSTOMER_NAME":"ACME Products and Services, Inc.",
    "ADDRESS":"123 Main Street",
    "CITY":"Albuquerque",
    "STATE":"NM",
    "ZIP":"87101-1234"
};

var count = 1636800; // Maximum amount that can be output using JSON.stringify.
var dataToOutput = [];
for (var i = 0; i < count; ++i) {
    dataToOutput.push(testData);
}

var options = {};
const stream = bfj.streamify(dataToOutput, options);

var jsonOutputFile = fs.createWriteStream("./output/huge-json-file.json");

stream.pipe(jsonOutputFile);