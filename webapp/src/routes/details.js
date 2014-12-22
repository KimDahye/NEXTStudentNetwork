var path = require('path');
var router = require('express').Router();
var detailsService = require(path.join(SRC_ROOT, 'service/details.js'));
var swig  = require('swig');

// Router starts '/details'

/**
 * GET /details?studentNo=[studentNo]
 *
 * @Response {html} Student's details
 */

router.get('', function(req, res) {
  var studentNo = req.query.studentNo;

  detailsService.getDetails(studentNo, function (data) {
    res.status(200).send(swig.renderFile('webapp/views/details.html', {"data":data}));
  });
});

module.exports = router;