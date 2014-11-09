


var fs = require('fs')
var path = require('path');
fs.readdir(process.argv[2], function (err, files) {
	for(var i in files) {
   if(path.extname(files[i]) === "." + process.argv[3]) {
       console.log(files[i]);
  	}
	}
});

