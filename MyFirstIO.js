/*var fs = require('fs');
var data = fs.readFileSync("foo.txt", "utf8");
var str = data.toString().split('\n').length;
console.log(str);
*/
var fs = require('fs');
var data = fs.readFileSync(process.argv[2], 'utf8');
var str = data.toString().split('\n').length-1;
console.log(str);


