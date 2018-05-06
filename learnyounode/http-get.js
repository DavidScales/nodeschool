/*
 Request a URL (as CL arg) via HTTP & output the resulting data as text (to stdout)
 */

const http = require('http');
const url = process.argv[2];

http.get(url, response => {
  response.setEncoding('utf8');
  response.on('data', data => {
    console.log(data);
  });
  response.on('end', () => {
    // console.log('DONE!');
  });
  response.on('error', err => {
    console.log('Uh oh', err);
  });
});


// Better alternative:

// var http = require('http')
// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// }).on('error', console.error)