/**
  Write an HTTP server that serves the same text file for each request it
  receives.

  Your server should listen on the port provided by the first argument to
  your program.

  You will be provided with the location of the file to serve as the second
  command-line argument. You must use the fs.createReadStream() method to
  stream the file contents to the response.
 */

const fs = require('fs');
const http = require('http');
const port = process.argv[2];
const filePath = process.argv[3];

const connectionListener = (req, res) => {
  const fileStream = fs.createReadStream(filePath);
  fileStream.pipe(res);
}

const server = http.createServer(connectionListener);
server.listen(port);

// official solution:

// var http = require('http')
// var fs = require('fs')

// var server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' })

//   fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(Number(process.argv[2]))