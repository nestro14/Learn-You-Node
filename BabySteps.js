
var num = 0.0;

process.argv.forEach(function(val, index, array) {
 if (index >0 && index < array.length-1) {
num += Number(array[index+1]);
 }; 
});

console.log(num);

/*
	var result =0;

	for (var i=2; i < process.argv.length; i++)
		result += Number(process.argv[i])

	consol.log(result)
*/