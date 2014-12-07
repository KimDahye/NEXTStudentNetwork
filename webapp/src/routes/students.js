var path = require('path');
var router = require('express').Router();
var studentsService = require(path.join(SRC_ROOT, 'service/students.js'));
var responseService = require(path.join(SRC_ROOT, 'service/response.js'));

// Router starts '/students'

/**
 * @Request
 * GET /students?num=[Number]
 * 0 < Number <= 24
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
  var response = {errors: []};

  // check request validation
  if (req.query.num == undefined)
    response.errors.push(responseService.errResponse(10, 'num parameter should be defined.'));
  else
    if (isNaN(Number(req.query.num)))
      response.errors.push(responseService.errResponse(20, 'num parameter should be a number.'));
    else
      if (0 < Number(req.query.num) && Number(req.query.num) <= 24)
        response.errors.push(responseService.errResponse(20, 'num parameter should be 0 < num <= 24.'));

  if (response.errors.length != 0) {
    res.status(400).send(response);
    return;
  }

  studentsService.getRndProfiles(req.query.num, function (arr) {
    response = {data: arr};
    res.status(200).send(response);
  });
});

module.exports = router;
