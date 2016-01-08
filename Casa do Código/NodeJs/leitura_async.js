var fs = require('fs');

var leituraAsync = function(arquivo) {
	console.log("Fazendo leitura ass�ncrona");
	var inicio = new Date().getTime();
	fs.readFile(arquivo);
	var fim = new Date().getTime();
	console.log("Bloqueio ass�ncrono: " + (fim - inicio) + "ms");
};

module.exports = leituraAsync;