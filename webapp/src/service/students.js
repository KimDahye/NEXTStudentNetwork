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
  imgName: '/images/placeholder.png',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: '/images/placeholder.png',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: '/images/placeholder.png',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: '/images/placeholder.png',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: '/images/placeholder.png',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: '/images/placeholder.png',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: '/images/placeholder.png',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: '/images/placeholder.png',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: '/images/placeholder.png',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: '/images/placeholder.png',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: '/images/placeholder.png',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: '/images/placeholder.png',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: '/images/placeholder.png',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: '/images/placeholder.png',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: '/images/placeholder.png',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: '/images/placeholder.png',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: '/images/placeholder.png',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: '/images/placeholder.png',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: '/images/placeholder.png',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: '/images/placeholder.png',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: '/images/placeholder.png',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: '/images/placeholder.png',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: '/images/placeholder.png',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: '/images/placeholder.png',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'PzFVXtUq7Eg'
}, {
  nameKor: '김다혜',
  nameEng: 'KimDaHye',
  majorKor: '웹 서버 전공',
  majorEng: 'Web server track',
  imgName: '/images/placeholder.png',
  title: '나무처럼 살고픈 김다혜',
  vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
  movieUrl: 'PzFVXtUq7Eg'
}];