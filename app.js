const express = require('express');
const fs = require('fs');
const engines = require('consolidate');
const path = require("path");
const router = express.Router();
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
var stream = fs.createWriteStream(logs, {flags: 'a'});

var logger = function(err, req, res, next){
    stream.write(new Date().toISOString() + ' | ' + req.url + '\n');
    console.log(new Date().toISOString() + ' | ' + req.url + ' | ' + err.stack.toString());
    next();
}


router.use(logger);
// router.get('/', function(req, res){
//     //res.send('Hello World!');
//     res.send("Hello </br><a href='/languages-and-machines/'>week1</a>");
// });

router.get("*", function(req, res){
    res.render(__dirname + "/public/base.ejs", 
        {
            title: req.url.title,
            filePath: path.join(__dirname, "views/languages-and-machines/week1.html")
        });

});

/**
router.get('/languages-and-machines/', function(req, res){
    res.sendFile(__dirname + "/views/languages-and-machines/week1.html");
});
*/

app.use("/", router);

app.use("*", function(req, res){
    res.sendFile(__dirname + "/public/404.html");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`); 
    stream.write(new Date().toISOString() + ` Starting Server on port ${port}!\n---\n`);
    stream.write('Time | Request | error\n\---|---|---|\n')
});