const express = require('express');
const fs = require('fs');
const engines = require('consolidate');
const path = require("path");
const notesHelper = require("./notesHelper");



const app = express();
const port = 50000;

//app.set('view engine', 'pug');

app.engine('ejs', engines.ejs);
app.set('view engine', 'ejs');
// app.set('views', './views')

app.use(express.static(__dirname + '/public'));

/**
 * Logger
 * Logs URL accesses and times to log.md.
 */
var logs = "./logs/log.md";
var stream = fs.createWriteStream(logs, { flags: 'a' });

var logger = function (err, req, res, next) {
  stream.write(new Date().toISOString() + ' | ' + req.url + '\n');
  console.log(new Date().toISOString() + ' | ' + req.url + ' | ' + err.stack.toString());
  next();
}


app.use(logger);

app.use("/notes", notesHelper);

app.get('/', function (req, res) {
  res.render(__dirname + "/public/base.ejs",
    {
      title: "Home Page",
      filePath: path.join(__dirname, "/public/index.ejs")
    });
});

app.get('/posts', function (req, res) {
  res.render(__dirname + "/public/base.ejs",
    {
      title: "Home Page",
      filePath: path.join(__dirname, "/public/posts.ejs")
    });
});

app.get('/about', function (req, res) {
  res.render(__dirname + "/public/base.ejs",
    {
      title: "Home Page",
      filePath: path.join(__dirname, "/public/about.ejs")
    });
});


// Handle 400
app.use(function (req, res) {
  res.status(400);
  res.render(__dirname + "/public/base.ejs",
    {
      title: "Error 400",
      filePath: path.join(__dirname, "/public/error.ejs")
    });
});

// Handle 500
app.use(function (error, req, res, next) {
  res.status(500);
  res.render(__dirname + "/public/base.ejs",
    {
      title: "Error 500",
      filePath: path.join(__dirname, "/public/error.ejs")
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
  stream.write(new Date().toISOString() + `Starting Server on port ${port}!\n---\n`);
  stream.write('Time | Request | error\n\---|---|---|\n');
});