const path = require("path");
const fs = require("fs");

var dirname = "C:\\Users\\NoahBurwell\\Desktop\\tofutexts\\views\\Languages-and-Machines"

fs.stat(dirname, function(err, stats){
    if(err){
      console.error(err);
    }
    console.log(stats);

    console.log("isFile? " + stats.isFile() );
    console.log("isDirectory? " + stats.isDirectory() );
});
