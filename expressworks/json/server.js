/**
Write a server that, when it receives a GET, reads a file, parses it to JSON,
and responds with that content to the user.

The server should respond to any GET that matches the /books resource path.
 */

const express = require('express');
const fs = require('fs');

const port = process.argv[2];
const filename = process.argv[3];
const app = express();

app.get('/books', (req, res) => {
  fs.readFile(filename, 'utf8', (err, file) => {
    if (err) {
      return console.log(err);
    }
    const object = JSON.parse(file);
    res.json(object);
  });
});

app.listen(port, 'localhost');
console.log(`Listening at localhost:${port}`);

// official solution

// var express = require('express')
// var app = express()
// var fs = require('fs')

// app.get('/books', function(req, res){
//   var filename = process.argv[3]
//   fs.readFile(filename, function(e, data) {
//     if (e) return res.sendStatus(500)
//     try {
//       books = JSON.parse(data)
//     } catch (e) {
//       res.sendStatus(500)
//     }
//     res.json(books)
//   })
// })

// app.listen(process.argv[2])

