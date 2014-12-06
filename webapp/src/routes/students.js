var router = require('express').Router();

// Router starts '/students'

router.get('/:name', function(req, res) {
  res.status(200).send('Hello ' + req.params.name + '!');
});

module.exports = router;
