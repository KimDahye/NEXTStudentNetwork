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
  callback(sampleData.slice(0, num));
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

// temp data
var sampleData = [{
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: 'test0.jpg',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'http://www.youtube.com/v/PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: 'test1.jpg',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'http://www.youtube.com/v/PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: 'test2.jpg',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'http://www.youtube.com/v/PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: 'test3.jpg',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'http://www.youtube.com/v/PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: 'test4.jpg',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'http://www.youtube.com/v/PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: 'test5.jpg',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'http://www.youtube.com/v/PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: 'test6.jpg',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'http://www.youtube.com/v/PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: 'test7.jpg',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'http://www.youtube.com/v/PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: 'test8.jpg',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'http://www.youtube.com/v/PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: 'test9.jpg',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'http://www.youtube.com/v/PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: 'test10.jpg',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'http://www.youtube.com/v/PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: 'test11.jpg',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'http://www.youtube.com/v/PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: 'test12.jpg',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'http://www.youtube.com/v/PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: 'test13.jpg',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'http://www.youtube.com/v/PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: 'test14.jpg',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'http://www.youtube.com/v/PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: 'test15.jpg',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'http://www.youtube.com/v/PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: 'test16.jpg',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'http://www.youtube.com/v/PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: 'test17.jpg',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'http://www.youtube.com/v/PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: 'test18.jpg',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'http://www.youtube.com/v/PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: 'test19.jpg',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'http://www.youtube.com/v/PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: 'test20.jpg',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'http://www.youtube.com/v/PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: 'test21.jpg',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'http://www.youtube.com/v/PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: 'test22.jpg',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'http://www.youtube.com/v/PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: 'test23.jpg',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'http://www.youtube.com/v/PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: 'test24.jpg',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'http://www.youtube.com/v/PzFVXtUq7Eg'
}];