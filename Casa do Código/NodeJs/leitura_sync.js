var fs = require('fs');

var leituraSync = function(arquivo) {
	console.log("Fazendo leitura s�ncrona");
	var inicio = new Date().getTime();
	fs.readFileSync(arquivo);
	var fim = new Date().getTime();
	console.log("Bloqueio s�ncrono: " + (fim - inicio) + "ms")
};

module.exports = leituraSync;