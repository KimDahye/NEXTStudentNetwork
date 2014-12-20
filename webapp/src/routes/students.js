var path = require('path');
var router = require('express').Router();
var studentsService = require(path.join(SRC_ROOT, 'service/students.js'));
var responseService = require(path.join(SRC_ROOT, 'service/response.js'));

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
  var response = {errors: []};

  // check request validation
  if (req.query.num == undefined) {
  studentsService.getRndProfiles(req.query.num, function (arr) {
    response = {data: arr};
    res.status(200).send(response);
  });
  }
    //response.errors.push(responseService.errResponse(10, 'num parameter should be defined.'));
  else
    if (isNaN(Number(req.query.num)))
      response.errors.push(responseService.errResponse(20, 'num parameter should be a number.'));

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
