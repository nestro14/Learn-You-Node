var fs = require('fs');
fs.readFile(process.argv[2], function (err, data) {
var str = data.toString().split('\n').length-1;
console.log(str);
});

/*
fs.readFile(file, 'utf8' callback) // can also be used
*/

