var http = require('http');

http.get('http://loripsum.net/api/1', function(res) {
	var text = '';

	res.on('data', function (chunk) {
		text += chunk;
	});

	res.on('end', function () {
		console.log(text);
	});
}).on('error', function(e) {
	console.log('Got error: ' + e.message);
});