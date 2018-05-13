/**
  Create an Express.js app with a home page rendered by the Pug template engine.

  The home page should respond to /home.

  The view should show the current date using 'new Date().toDateString()'.
 */
const http = require('http');
const express = require('express');
const path = require('path');

const port = process.argv[2];
const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'templates'));
app.get('/home', (req, res) => {
  res.render('index', {
    date: new Date().toDateString()
  });
});

app.listen(port, 'localhost');
console.log(`Listening at localhost:${port}`);

// official solution:

// var express = require('express')
// var app = express()
// app.set('view engine', 'pug')
// app.set('views', process.argv[3])
// app.get('/home', function(req, res) {
//   res.render('index', {date: new Date().toDateString()})
// })
// app.listen(process.argv[2])
