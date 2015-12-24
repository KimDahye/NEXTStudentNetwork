var router = require('express').Router();
var path = require('path');
var studentsService = require(path.join(SRC_ROOT, 'services/students.js'));

// Router starts '/'

router.get('/', function(req, res) {
  res.status(200).render('main.html');
});

module.exports = router;
