var router = require('express').Router();

// Router starts '/'

router.get('/', function(req, res) {
  res.status(200).render('main.html');
});

module.exports = router;
