require('../../global.js');
var path = require('path');
var request = require('superagent');
var expect = require('expect.js');

var database = require(path.join(SRC_ROOT, 'modules/database.js'));

describe('Suite one', function() {
  it('Should be success', function (done) {
    database.query('SELECT 1', function (err, rows, fields) {
      if (err) throw err;
      done();
    });
  });
});