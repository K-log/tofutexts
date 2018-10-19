const path = require("path");
const fs = require("fs");
const express = require('express');
const router = express.Router();


router.use(express.static(__dirname + '/public'));
router.use(function (req, res, next) {
  console.log(req.originalUrl);
  next()
});


/**
 * Lambda Calculus Routes
 * ======================
 */
router.get('/lambda-calculus/:week?', function (req, res) {
  if (req.params.week != undefined) {
    var fn = path.join(__dirname, "views/lambda-calculus", "week" + req.params.week + ".html");
    console.log("fn week", fn.length, fn);
    res.render(path.join(__dirname, "/public/base.ejs"),
      {
        title: "Tofutexts | Notes",
        filePath: fn
      });
  } else {
    var fn = 1;
    fn = fs.readdirSync(path.join(__dirname, "views/lambda-calculus"), (err, files) => {
      return files.length;
    });
    console.log("lang all", fn);
    var final = []
    for(var f in fn){
      console.log("fffff", f);
      final.push(path.join(req.originalUrl, (final.length+1).toString()));
    }
    console.log("lang all", final);
    res.render(path.join(__dirname, "/public/base.ejs"),
      {
        title: "Tofutexts | Notes",
        page: "Lambda Calculus Class Notes",
        filePath: path.join(__dirname, "/public/notes.ejs"),
        notes: final
      });
  }
});

/**
 * Languages And Machines Routes
 * ======================
 */
router.get('/languages-and-machines/:week?', function (req, res) {
  if (req.params.week != undefined) {
    var fn = path.join(__dirname, "views/languages-and-machines", "week" + req.params.week + ".html");
    console.log("fn week", fn.length, fn);
    res.render(path.join(__dirname, "/public/base.ejs"),
      {
        title: "Tofutexts | Notes",
        filePath: fn
      });
  } else {
    var fn = 1;
    fn = fs.readdirSync(path.join(__dirname, "views/languages-and-machines"), (err, files) => {
      return files.length;
    });
    console.log("lang all", fn);
    var final = []
    for(var f in fn){
      console.log("fffff", f);
      final.push(path.join(req.originalUrl, (final.length+1).toString()));
    }
    console.log("lang all", final);
    res.render(path.join(__dirname, "/public/base.ejs"),
      {
        title: "Tofutexts | Notes",
        page: "Languages and Machines Class Notes",
        filePath: path.join(__dirname, "/public/notes.ejs"),
        notes: final
      });
  }
});


/**
 * Logic Programming Routes
 * ======================
 */
router.get('/logic-programming/:week?', function (req, res) {
  if (req.params.week != undefined) {
    var fn = path.join(__dirname, "views/logic-programming", "week" + req.params.week + ".html");
    console.log("fn week", fn.length, fn);
    res.render(path.join(__dirname, "/public/base.ejs"),
      {
        title: "Tofutexts | Notes",
        filePath: fn
      });
  } else {
    var fn = 1;
    fn = fs.readdirSync(path.join(__dirname, "views/logic-programming"), (err, files) => {
      return files.length;
    });
    console.log("lang all", fn);
    var final = []
    for(var f in fn){
      console.log("fffff", f);
      final.push(path.join(req.originalUrl, (final.length+1).toString()));
    }
    console.log("lang all", final);
    res.render(path.join(__dirname, "/public/base.ejs"),
      {
        title: "Tofutexts | Notes",
        page: "Logic Programming Class Notes",
        filePath: path.join(__dirname, "/public/notes.ejs"),
        notes: final
      });
  }
});


/**
 * Types and Programming Languages Routes
 * ======================
 */
router.get('/types-and-programming-languages/:week?', function (req, res) {
  if (req.params.week != undefined) {
    var fn = path.join(__dirname, "views/types-and-programming-languages", "week" + req.params.week + ".html");
    console.log("fn week", fn.length, fn);
    res.render(path.join(__dirname, "/public/base.ejs"),
      {
        title: "Tofutexts | Notes",
        filePath: fn
      });
  } else {
    var fn = 1;
    fn = fs.readdirSync(path.join(__dirname, "views/types-and-programming-languages"), (err, files) => {
      return files.length;
    });
    console.log("lang all", fn);
    var final = []
    for(var f in fn){
      console.log("fffff", f);
      final.push(path.join(req.originalUrl, (final.length+1).toString()));
    }
    console.log("lang all", final);
    res.render(path.join(__dirname, "/public/base.ejs"),
      {
        title: "Tofutexts | Notes",
        page: "Types and Programming Languages Class Notes",
        filePath: path.join(__dirname, "/public/notes.ejs"),
        notes: final
      });
  }
});



module.exports = router;  