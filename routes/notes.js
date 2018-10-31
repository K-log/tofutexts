var express = require('express');
var router = express.Router();

/* GET notes page. */
router.get('/', function(req, res, next) {
  res.render('notes', { title: 'Class Notes' });
});

module.exports = router;
