/**
Forms are important. This exercise will teach you how to process the
traditional (non-AJAX) web form.

Write a route ('/form') that processes HTML form input
(<form><input name="str"/></form>) and responds with the value of str backwards.
 */
const express = require('express');
const bodyparser = require('body-parser');

const port = process.argv[2];
const app = express();

// could pass to route instead of using as middleware?
app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', (req, res) => {
  res.end(req.body.str.split('').reverse().join(''));
});

app.listen(port, 'localhost');
console.log(`Listening at localhost:${port}`);

// official solution:

// var express = require('express')
// var bodyParser = require('body-parser')
// var app = express()

// app.use(bodyParser.urlencoded({extended: false}))

// app.post('/form', function(req, res) {
//   res.send(req.body.str.split('').reverse().join(''))
// })

// app.listen(process.argv[2])
