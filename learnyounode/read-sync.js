/*
Read a file (synchronously) and print the number of newlines (\n) it
contains to the console (stdout)
*/
const fs = require('fs');

const filePath = process.argv[2];
const buffer = fs.readFileSync(filePath);
const text = buffer.toString();
const numNewLines = text.split('\n').length;

// test file does not have a newline on the end
console.log(numNewLines - 1);


// solution:
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1;

