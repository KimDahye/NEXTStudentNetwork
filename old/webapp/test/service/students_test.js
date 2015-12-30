require('../../../global.js');
var path = require('path');
var expect = require('expect.js');

var studentsService = require(path.join(SRC_ROOT, 'service/students.js'));

describe('Students Service', function() {
  it('#getMaxStudents should be success', function (done) {
    studentsService.getMaxStudents(function (num) {
      expect(num).not.equal(0);
      done();
    });
  });

  it('#getRndProfiles should be success', function (done) {
    var num = 4;
    studentsService.getRndProfiles(num, function (arr) {
      expect(arr.length).equal(num);
      done();
    });
  });
});