const path = require("path");
const express = require('express');
const router = express.Router();

router.use(express.static('../public'));

router.get('/:id', function (req, res) {
    res.render("../public/base.ejs", 
        {
            title: req.url.title,
            filePath: "../views/languages-and-machines/week" + req.params.id + ".html"
        });
});

router.get('/week/:id', function (req, res) {
  res.send('<h1>' + req.params.id + "</h1>");
});

module.exports = router;