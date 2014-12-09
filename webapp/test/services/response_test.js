require('../../../global.js');
var path = require('path');
var expect = require('expect.js');

var responseService = require(path.join(SRC_ROOT, 'services/response.js'));

describe('Response Service', function() {
  it('#errResponse should be success', function (done) {
    var errCode = 999;
    var errMsg = 'test message';
    var res = responseService.errResponse(errCode, errMsg);
    expect(res.code).equal(errCode);
    expect(res.message).equal(errMsg);
    done();
  });
});