var router = require('express').Router();

// Router starts '/'

router.get('/', function(req, res) {
  res.status(200).send('Hello world!');
});

module.exports = router;
