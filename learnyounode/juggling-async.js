/*
 Request multiple URLs (as CL args) via HTTP & output the resulting data as
 text (to stdout) *in order*
 */

const http = require('http');
const urls = [process.argv[2], process.argv[3], process.argv[4]];

const fetchData = url => {
  return new Promise((resolve, reject) => {
    http.get(url, response => {
      let text = '';
      response.setEncoding('utf8');
      response.on('data', data => {
        text += data;
      });
      response.on('end', () => {
        resolve(text);
      });
      response.on('error', err => {
        reject('Uh oh', err);
      });
    }).on('error', reject);
  });
}

Promise.all(urls.map(url => fetchData(url)))
  .then(texts => texts.map(text => console.log(text)))
  .catch(err => console.log('Uh oh', err));

// official solution:

// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0

// function printResults () {
//   for (var i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)
//       }

//       results[index] = data.toString()
//       count++

//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }

// for (var i = 0; i < 3; i++) {
//   httpGet(i)
// }

