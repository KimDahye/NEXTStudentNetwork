#!/usr/bin/env node
require('./global.js');
var info = require('debug')('info:www');
var app = require('./webapp/src/app.js');

var port = process.env.PORT || 8080;
app.set('port', port);

var server = app.listen(app.get('port'), function() {
  info('Express server listening on port ' + server.address().port);
});