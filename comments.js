// Create web server
// 1. npm init
// 2. npm install express
// 3. node comments.js

// Load the express module
var express = require('express');

// Create an express app
var app = express();

// Load the body-parser module
var bodyParser = require('body-parser');

// Configure the app to use body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Configure the app to serve static files from the public folder
app.use(express.static('public'));

// Create an array to store the comments
var comments = [];

// Create a route for the path /
app.get('/', function(req, res) {
  res.send('Hello, World!');
});

// Create a route for the path /comments
app.get('/comments', function(req, res) {
  res.json(comments);
});

// Create a route for the path /comments
app.post('/comments', function(req, res) {
  comments.push(req.body);
  res.json(comments);
});

// Start the web server on port 3000
app.listen(3000, function() {
  console.log('Server is listening on port 3000. Ready to accept requests!');
});