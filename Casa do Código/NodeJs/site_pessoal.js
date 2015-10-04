'use strict'

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    // A constante __dirname retorna o diretório raiz da aplicação.
    fs.readFile(__dirname + '/index.html', function (erro, html) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        if (erro) {
            response.write("<h2>" + erro + "</h2>");
        } else {
            response.write(html);
            response.end();
        }
    });
});

server.listen(3000, function () {
    console.log('Executando Site Pessoal');
});