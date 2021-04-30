var express = require('express');
var router = express.Router();

/* GET Admin listing. */
router.get('/', function (req, res, next) {
  res.send('Admin respond with a resource');
});

module.exports = router;
