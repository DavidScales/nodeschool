/**
  Prints a list of files in a given directory, filtered by the extension of
  the files. Directory name is the first argument (e.g. '/path/to/dir/') and
  a file extension to filter by is the second argument (e.g., 'txt')
 */

const filteredLs = require('./filter.js');
const directoryPath = process.argv[2];
const filterStr = process.argv[3];
const printItems = (err, items) => {
  if (err) {
    return console.log(err);
  }
  items.forEach(item => console.log(item));
};

filteredLs(directoryPath, filterStr, printItems);