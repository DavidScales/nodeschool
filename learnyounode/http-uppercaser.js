/**
  Write an HTTP server that receives only POST requests and converts
  incoming POST body characters to upper-case and returns it to the client.

  Your server should listen on the port provided by the first argument to
  your program.
 */

const http = require('http');
const map = require('through2-map');

const port = process.argv[2];

const connectionListener = (req, res) => {
  if (req.method !== 'POST') {
    return res.end('send me a POST\n');
  }
  req.pipe(map(chunk => {
      return chunk.toString().toUpperCase();
    })).pipe(res);
};

const server = http.createServer(connectionListener);
server.listen(port);

// official solution:

// var http = require('http')
// var map = require('through2-map')

// var server = http.createServer(function (req, res) {
//   if (req.method !== 'POST') {
//     return res.end('send me a POST\n')
//   }

//   req.pipe(map(function (chunk) {
//     return chunk.toString().toUpperCase()
//   })).pipe(res)
// })

// server.listen(Number(process.argv[2]))