'use strict'

var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": 'txt/html'});
    
    var caminho = url.parse(request.url, true);
    
    if ((caminho.path == "/") || (caminho.path == "/artigos")) {
        fs.readFile(__dirname + "/artigos.html", function (erro, html) {
            if(fs.exists(html)) {
                response.end(html);
            } else {
                response.end("<h2>Arquivo não encontrado</h2>");
            }
        });
    };
});

server.listen(3000, function () {
    console.log("URL Router is running");
});