#!/usr/bin/env node
var info = require('debug')('info:www');
var app = require('./webapp/src/app.js');

app.set('port', 3000);

var server = app.listen(app.get('port'), function() {
  info('Express server listening on port ' + server.address().port);
});