var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function (req, res) {
  res.send('Types and Programming languages');
});
// define the about route
router.get('/week/:id', function (req, res) {
  res.send('<h1>' + req.params.id + "</h1>");
});

module.exports = router;