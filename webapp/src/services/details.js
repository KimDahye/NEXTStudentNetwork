/**
 * @module DetailsService
 */

var path = require('path');
var database = require(path.join(SRC_ROOT, 'modules/database.js'));

/**
 * Get student's details.
 * @param {Function} callback Callback function returns student's profiles.
 * [{
 *    title: String,
 *    content : String,
 *    aImage : Array [{imgSrc: String, imgDesc: String}] (optional),
 *    pdfSrc : String (optional)
 *  },
 *  ...
 * ]
 */
exports.getDetails = function (studentNo, callback) {
	var details = sampleData[studentNo];
	console.log(details);
	callback(details);
};

// temp data
var sampleData = {
	'141001': {
		title : '제목',
		content : '내용',
		aImage : [{
			imgSrc: 'http://www.nhnnext.org/static/20130219/14/kooseungmo.jpg',
			imgDesc: '이미지 1'
		}, {
			imgSrc: 'http://www.nhnnext.org/static/20130219/14/kooseungmo.jpg',
			imgDesc: '이미지 2'
		}, {
			imgSrc: 'http://www.nhnnext.org/static/20130219/14/kooseungmo.jpg',
			imgDesc: '이미지 3'
		}],
		pdfSrc: 'http://cdn.nhnnext.org/nhnnext/down/2014_NHN_NEXT_guidebook_for_application_first_example_1.0.pdf'
	},
	'141002': {
		title : '제목',
		content : '내용',
		aImage : [{
			imgSrc: 'http://www.nhnnext.org/static/20130219/14/kooseungmo.jpg',
			imgDesc: '이미지 1'
		}, {
			imgSrc: 'http://www.nhnnext.org/static/20130219/14/kooseungmo.jpg',
			imgDesc: '이미지 2'
		}]
	},
	'141003': {
		title : '제목',
		content : '내용',
		pdfSrc: 'http://cdn.nhnnext.org/nhnnext/down/2014_NHN_NEXT_guidebook_for_application_first_example_1.0.pdf'
	}
};