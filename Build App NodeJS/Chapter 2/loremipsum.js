var http = require('http');
var fs = require('fs');

http.get('http://loripsum.net/api/1', function(res) {
	var text = '';

	res.on('data', function (chunk) {
		text += chunk;
	});

	res.on('end', function () {
		fs.writeFile('lorem.html', text, function () {
            console.log("Arquivo pronto!");
        });
	});
}).on('error', function(e) {
	console.log('Got error: ' + e.message);
});