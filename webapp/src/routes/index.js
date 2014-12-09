var router = require('express').Router();
var path = require('path');
var studentsService = require(path.join(SRC_ROOT, 'service/students.js'));

// Router starts '/'

router.get('/', function(req, res) {
  studentsService.getRndProfiles(4, function (data) {
    res.status(200).render('main.html', {"data":data});
  });
});

module.exports = router;
