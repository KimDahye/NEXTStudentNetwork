require('../../../global.js');
var path = require('path');
var request = require('superagent');
var expect = require('expect.js');

describe('Students router /students', function() {
  it('?num=4 request should success', function (done) {
    request
      .get('localhost:3000/students')
      .query({num: 4})
      .end(callback);

    function callback(res) {
      expect(res.status).equal(200);
      done();
    }
  });

  it('?num=four request should fail', function (done) {
    request
      .get('localhost:3000/students')
      .query({num: 'sa'})
      .end(callback);

    function callback(res) {
      expect(res.status).equal(400);
      done();
    }
  });

  it('?num=4&start=1 request should success', function (done) {
    request
      .get('localhost:3000/students')
      .query({num: 4, start: 1})
      .end(callback);

    function callback(res) {
      expect(res.status).equal(200);
      done();
    }
  });

  it('?num=4&start=one request should fail', function (done) {
    request
      .get('localhost:3000/students')
      .query({num: 4, start: 'one'})
      .end(callback);

    function callback(res) {
      expect(res.status).equal(400);
      done();
    }
  });
});