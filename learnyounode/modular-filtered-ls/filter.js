const fs = require('fs');

module.exports = function (directoryPath, filterStr, callback) {

  const ext = `.${filterStr}`;
  fs.readdir(directoryPath, (err, list) => {
    if (err) {
      return callback(err);
    }
    const filteredList = list.filter(item => item.slice(-ext.length) === ext);
    return callback(null, filteredList);
  });

};

// Alternative solution
// var fs = require('fs')
// var path = require('path')

// module.exports = function (dir, filterStr, callback) {
//   fs.readdir(dir, function (err, list) {
//     if (err) {
//       return callback(err)
//     }

//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })

//     callback(null, list)
//   })
}
