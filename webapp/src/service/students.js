/**
 * @module StudentsService
 */

var path = require('path');
var database = require(path.join(SRC_ROOT, 'modules/database.js'));

/**
 * Get random student's profiles.
 * @param {Function} callback Callback function returns student's profiles.
 * [{
 *    nameKor: String,
 *    nameEng: String,
 *    majorKor: String,
 *    majorEng: String,
 *    imgName: String,
 *    title: String,
 *    vision: String,
 *    movieUrl: String
 *  },
 *  ...
 * ]
 * @param {Number} num number of student's profiles
 */
exports.getRndProfiles = function (num, callback) {
  var query = 'SELECT Stu.stu_name_kor AS nameKor, Stu.stu_name_eng AS nameEng, ' +
      '  Mjr.mjr_name_kor AS majorKor, Mjr.mjr_name_eng AS majorEng, ' +
      '  Stu.stu_img_name AS imgName, Stu.stu_title AS title, ' +
      '  Stu.stu_vision AS vision, Stu.stu_mov_url AS movieUrl ' +
      'FROM Students AS Stu ' +
      'JOIN Majors AS Mjr ' +
      'ON Stu.stu_major = Mjr.mjr_id ' +
      'ORDER BY rand() ' +
      'LIMIT ';

  database.query(query + num, function (err, results) {
    callback(results);
  });
};

/**
 * Counting rows in Students table.
 * @param {function} callback Callback
 * @return {Number} count of all students
 */
exports.getMaxStudents = function (callback) {
  database.query('SELECT MAX(stu_id) - MIN(stu_id) + 1 AS num FROM Students'
    , function (err, rows, fields) {
      if (err) throw err;
      callback(rows[0].num);
  });
};
