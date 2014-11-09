var fs = require('fs')
var path = require('path')
var mymodule = require('./mymodule.js');
var directory = process.argv[2];
var filter = process.argv[3];

mymodule(directory, filter, function (err, list) {
	if (err)
		return console.error('There was an error:', err)

	list.forEach(function (file) {
		console.log(file)
	})
})
