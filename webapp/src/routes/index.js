var router = require('express').Router();
var path = require('path');

/*
 Router for '/'
*/
router.get('/', function(req, res) {
  res.status(200).render('main');
});

module.exports = router;
