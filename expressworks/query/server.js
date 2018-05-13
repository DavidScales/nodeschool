/**
Write a route that extracts data from the query string in the GET /search URL
route, e.g. ?results=recent&include_tabs=true and then outputs it back to
the user in JSON format.
 */

const express = require('express');

const port = process.argv[2];
const app = express();

app.get('/search', (req, res) => {
  res.end(JSON.stringify(req.query));
});

app.listen(port, 'localhost');
console.log(`Listening at localhost:${port}`);

// official solution

// var express = require('express')
// var app = express()

// app.get('/search', function(req, res){
//   var query = req.query
//   res.send(query)
// })

// app.listen(process.argv[2])

