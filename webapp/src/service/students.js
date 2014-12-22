/**
 * @module StudentsService
 */

var path = require('path');
var database = require(path.join(SRC_ROOT, 'modules/database.js'));

/**
 * Get random student's profiles.
 * @param {Function} callback Callback function returns student's profiles.
 * [{
 *    studentNo: Integer,
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
  if(num)
  	callback(sampleData.slice(0, num));
  else {
  	callback(sampleData);
  }
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
	studentNo: '141001',
	nameKor: '김다혜',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20130219/14/kooseungmo.jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
},{
	studentNo: '141002',
	nameKor: '이건희',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20130626/17/1111111.jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
},{
	studentNo: '141003',
	nameKor: '이재봉',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20130219/14/kimdongjin.jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
},{
	studentNo: '141004',
	nameKor: '유선',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20130219/14/kimjongkyu.jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
},{
	studentNo: '141005',
	nameKor: '김민주',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20130219/14/parkjeasung.jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
},{
	studentNo: '141006',
	nameKor: '이재봉',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20130219/14/kimdongjin.jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
},{
	studentNo: '141007',
	nameKor: '유선',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20130219/14/kimjongkyu.jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
},{
	studentNo: '141008',
	nameKor: '김민주',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20130219/14/parkjeasung.jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
},{
	studentNo: '141009',
	nameKor: '김다혜',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20130626/18/2.jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
},{
	studentNo: '141010',
	nameKor: '이건희',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20130219/14/seokyoungjin.jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
},{
	studentNo: '141011',
	nameKor: '이재봉',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20130219/14/sonyoungsu.jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
},{
	studentNo: '141012',
	nameKor: '유선',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20130219/14/ohdongwoo.jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
},{
	studentNo: '141013',
	nameKor: '김민주',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20130219/14/yunjisu.jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
},{
	studentNo: '141014',
	nameKor: '이건희',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20130221/19/lny(1).jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg',
},{
	studentNo: '141015',
	nameKor: '이재봉',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20140702/14/2.jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
},{
	studentNo: '141016',
	nameKor: '유선',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20130318/15/p11(3).jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
},{
	studentNo: '141017',
	nameKor: '김민주',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20130219/14/imseokhyeon.jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
},{
	studentNo: '141018',
	nameKor: '김다혜',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20140324/16/1.jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
},{
	studentNo: '141019',
	nameKor: '이건희',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20130219/14/chunghoyoung.jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
},{
	studentNo: '141020',
	nameKor: '이재봉',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20140122/17/12.jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
},{
	studentNo: '141021',
	nameKor: '김민주',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20130219/14/joohyungchulcylog.jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg',
},{
	studentNo: '141022',
	nameKor: '김다혜',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20140128/11/1.jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
},{
	studentNo: '141023',
	nameKor: '이건희',
	nameEng: 'KimDaHye',
	majorKor: '웹 서버 전공',
	majorEng: 'Web server track',
	imgName: 'http://www.nhnnext.org/static/20130221/19/hsj.jpg',
	title: '나무처럼 살고픈 김다혜',
	vision: '소프트웨어를 통해 공동체의 가치를 이루고 싶습니다.',
	movieUrl: 'PzFVXtUq7Eg'
}];