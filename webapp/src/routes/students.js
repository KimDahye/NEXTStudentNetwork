var path = require('path');
var router = require('express').Router();
var studentsService = require(path.join(SRC_ROOT, 'service/students.js'));
var responseService = require(path.join(SRC_ROOT, 'service/response.js'));

// Router starts '/students'

/**
 * @Request
 * GET /students?num=[Number]&start=[Number]
 * 0 < Number <= 24
 *
 * @Response {Json} Student's profiles
 * If database has smaller than num, returns available data.
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
  var response = {errors: []};
  var num = req.query.num;
  var start = req.query.start !== undefined ? Number(req.query.start) : 0;
  var seed = 0; // todo

  // check request validation
  if (num == undefined)
    response.errors.push(responseService.errResponse(10, 'num parameter should be defined.'));
  else
    if (isNaN(Number(num)))
      response.errors.push(responseService.errResponse(20, 'num parameter should be a number.'));
    else
      if (0 > Number(num) || Number(req.query.num) > 24)
        response.errors.push(responseService.errResponse(20, 'num parameter should be 0 < num <= 24.'));

  if (isNaN(start) || typeof start != 'number')
    response.errors.push(responseService.errResponse(20, 'start parameter should be a number.'));

  if (response.errors.length != 0) {
    res.status(400).send(response);
    return;
  }

  studentsService.getRndProfiles(seed, start, num, function (arr) {
    response = {data: arr};
    res.status(200).send(response);
  });
});

module.exports = router;
