var express = require('express');
var router = express.Router();

const cncClasses = {
  lambdaCalc: {
    url: "notes/lambda-calculus", 
    title: "Lambda Calculus", 
    description: "Study of the Lambda Calculus."
  },
  langMach: {
    url: "notes/languages-and-machines",
    title: "Languages and Machines",
    description: "TODO"
  },
  prog: {
    url: "notes/programming-logic",
    title: "Programming Logic",
    description: "Programming in Prolog."
  },
  tapl: {
  url: "notes/types-and-programming-languages",
  title: "Types and Programming Languages",
  description: "TODO"
  }
};

/* GET notes page. */
router.get('/', function(req, res, next) {
  res.render('notes', { title: 'Class Notes', classList: cncClasses });
});



module.exports = router;
