//
// This program is to test the largest JSON string that can be handled by JSON.parse.
// By definition this can't parse anything bigger than the max Node.js string size.
//

function runTest(amount) {
    const json = '{ "d": "' + 'x'.repeat(amount) + '" }';
    const parsedData = JSON.parse(json);

    return json.length; // Return the number of characters successfully parsed.
}

let increment = 10000000; // Number of characters to add with each test run.
let numCharacters = 10000000; // Start with a large number of characters.
let maxStringLength = 0;

while (true) {
    try {
        console.log("Parsing a string with " + numCharacters + " characters.");

        maxStringLength = runTest(numCharacters);

        // Success if we got here.
        // Attempt more characters.
        numCharacters += increment;
    }
    catch (err) {
        console.log("Breached the limit!");
        //console.log(err.stack); // Uncomment this if you want to see the error.

        // Failed it we got here. 
        // Step back, reduce the increment, then continue.
        if (increment === 1) {
            break;
        }

        numCharacters -= increment;
        increment = Math.floor(increment / 2);

        console.log("Increment is reduced to " + increment);

        if (increment === 0) {
            break;
        }
        numCharacters += increment;
    }
}

const numBytes = maxStringLength * 2; // Characters in a JS string are 2 bytes.

console.log(
    "Maximum size json data that can be parsed through JSON.parse is " + numBytes + " bytes, " + 
    (numBytes/1024/1024).toFixed(2) + " megabytes, or " + 
    (numBytes/1024/1024/1024).toFixed(2) + " gigabytes."
);