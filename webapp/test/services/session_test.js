require('../../../global.js');
var path = require('path');
var expect = require('expect.js');

var sessionService = require(path.join(SRC_ROOT, 'services/session.js'));

describe('Session service', function() {
  it('#checkSeedIfNotSet should success.', function (done) {
    var session = {};
    sessionService.checkSeedIfNotSet(session);
    expect(session.seed).not.to.be(undefined);
    done();
  });

  it('#checkSeedIfNotSet If exists seed, should not be modified. ', function (done) {
    var session = {seed: 1};
    sessionService.checkSeedIfNotSet(session);
    expect(session.seed).to.equal(1);
    done();
  });
});