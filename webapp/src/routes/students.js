var path = require('path');
var router = require('express').Router();
var studentsService = require(path.join(SRC_ROOT, 'service/students.js'));

// Router starts '/students'

/**
 * GET /students?num=[Number]
 *
 * @Response {Json} Student's profiles
 * { data :
 *    [{
 *        nameKor: String,
 *        nameEng: String,
 *        majorKor: String,
 *        majorEng: String,
 *        imgName: String,
 *        title: String,
 *        vision: String,
 *        movieUrl: String
 *      },
 *      ...
 *    ]
 * }
 */
router.get('', function (req, res) {
  studentsService.getRndProfiles(req.query.num, function (arr) {
    res.status(200).send({data: arr});
  });
});

module.exports = router;
