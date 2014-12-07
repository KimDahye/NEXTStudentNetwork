var path = require('path');
var router = require('express').Router();
var studentsService = require(path.join(SRC_ROOT, 'service/students.js'));

// Router starts '/android'

router.get('/', function(req, res) {
  // TODO
  res.status(200).send({
    result: 'success'
  });
});

module.exports = router;
