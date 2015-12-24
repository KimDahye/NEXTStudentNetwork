require('../../global.js');
var path = require('path');
var request = require('superagent');
var expect = require('expect.js');

var database = require(path.join(SRC_ROOT, 'modules/database.js'));

describe('Temporary test', function() {
  it('Do not care of this test', function (done) {
    request
      .get('localhost:3000/students')
      .query({num: '사'})
      .end(callback);

    function callback(res) {
      expect(res.status).equal(200);
      done();
    }
  });
});