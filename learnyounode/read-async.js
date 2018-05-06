/**
  Uses a single asynchronous filesystem operation to read a file and print
  the number of newlines it contains to the console (stdout)
 */
const fs = require('fs');

const filePath = process.argv[2];
const buffer = fs.readFile(filePath, (err, data) => {
  if (err) {
    console.log('Uh oh...', err);
    return;
  }
  const text = data.toString();
  const numNewLines = text.split('\n').length;

  // test file does not have a newline on the end
  console.log(numNewLines - 1);
});

// alternatively add utf8 arg for string data directly:
// fs.readFile(file, 'utf8', callback)
