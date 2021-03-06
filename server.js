const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const router = require('./routes/api/users');
const app = express();
var methodOverride = require('method-override');

// Always require and configure neat the top
require('dotenv').config();
// Connect to the database (after the dotenv)
require('./config/database');

app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(methodOverride('_method')); 

//middleware to verfiy the token and assign the user object to the request obj.
app.use(require('./config/checkToken'));
// const ensureLoggedIn = require('./config/ensureLoggedIn');


const http = require('http').Server(app);
require('./io').init(http);

// API routes here
app.use('/api/users', require('./routes/api/users'));
app.use('/api/books', require('./routes/api/books'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profiles', require('./routes/api/profiles'));
app.use('/api/clubs', require('./routes/api/clubs'));


// "Catch all" route
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

http.listen(port, function() {
  console.log(`Express app running on port ${port}`);
});

