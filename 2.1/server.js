//Sem o Express
/*
var http = require('http');
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Sou um servidor criado pelo Node.js!\n');
}).listen(3000, '127.0.0.1');
*/

//Com o Express
var http = require('http');
http.createServer('Aqui entra o Express com seus middlewares').listen(3000, '127.0.0.1');