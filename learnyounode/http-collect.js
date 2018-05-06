/*
 Request a URL (as CL arg) via HTTP & output the resulting data as text (to stdout)
 */

const http = require('http');
const url = process.argv[2];

http.get(url, response => {
  let text = '';
  response.setEncoding('utf8');
  response.on('data', data => {
    text += data;
  });
  response.on('end', () => {
    console.log(text.length);
    console.log(text);
  });
  response.on('error', err => {
    console.log('Uh oh', err);
  });
}).on('error', console.error);


// alternative with 3rd party package:

// var http = require('http')
// var bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err) {
//       return console.error(err)
//     }
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })