// SET UP ======================================================

var path = require('path');
var express = require('express');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose   = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');

var configDB = require(path.join(SRC_ROOT,'config/database.js'))
var secret = configDB.secret;

// CONFIGURATION ======================================================
mongoose.connect(configDB.url);

require(path.join(SRC_ROOT,'config/passport'))(passport);

var app = express();
app.set('views', VIEW_ROOT);
app.set('view engine', 'ejs');
app.use(express.static(PUBLIC_ROOT));
app.use(morgan('dev'));
app.use(bodyParser());
app.use(cookieParser());
app.use(session({
  name: 'next_network',
  secret: secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 3600000 // 1 hour
  }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// routers
require(path.join(SRC_ROOT,'routes/routes.js'))(app, passport);

/*
// Error handling
app.use(function(req, res, next) {
  var err = new Error('Not found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});
*/

module.exports = app;
