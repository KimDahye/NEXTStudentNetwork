var request = require('superagent');
var expect = require('expect.js');

describe('Suite one', function() {
  it('Should be connected', function (done) {
    request.get('localhost:3000').end(function(res) {
      expect(res.status).to.equal(200);
      done();
    })
  })
});