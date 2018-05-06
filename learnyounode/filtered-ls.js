/**
  Prints a list of files in a given directory, filtered by the extension of
  the files. Directory name is the first argument (e.g. '/path/to/dir/') and
  a file extension to filter by is the second argument (e.g., 'txt')
 */

const fs = require('fs');

const directoryPath = process.argv[2];
const ext = `.${process.argv[3]}`;

fs.readdir(directoryPath, (err, list) => {
  if (err) {
    return console.log('Uh oh', err);
  }
  const filteredList = list.filter(item => item.slice(-ext.length) === ext);
  filteredList.forEach(item => console.log(item));
});


// alternative:
// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })