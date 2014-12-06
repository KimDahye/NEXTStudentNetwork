/**
 * @module StudentsService
 */

var path = require('path');
var database = require(path.join(SRC_ROOT, 'modules/database.js'));

/**
 * Get random student's profiles.
 * @param {Number} n
 */
exports.getRndProfiles = function (n) {
  // TODO
};

/**
 * Counting rows in Students table
 * @param {function} callback Callbac
 * @return {Number} count of all students
 */
exports.getMaxStudents = function (callback) {
  database.query('SELECT MAX(stu_id) - MIN(stu_id) + 1 AS num FROM Students', function (err, rows, fields) {
    if (err) throw err;
    callback(rows[0].num);
  });
};