var http = require('http');

var server = http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});

	if (request.url === '/') {
		response.end('Hello World\n');
	} else if (request.url === '/contato') {
		response.end('denis.missias@gmail.com\n');
	} else {
		response.end('Not found');
	}
});

server.listen(1337);

console.log('Server running at port 1337');
