/*
    Autor: Denis de Sousa Missias
    Descrição: Estudo dos operadores javascript
*/
Pessoa = {
    nome: "Denis"
}

alert(Pessoa.nome);
alert("nome" in Pessoa);
delete(Pessoa.nome);
alert(Pessoa.nome);

alert("Email" in Pessoa);

var idade = new Number(31);

alert(idade instanceof Number);
var x = (idade >= 18) ? "Maior de idade" : "Menor de idade";
alert(x);

alert(this.document.title);

alert(typeof(true));

//== Compara somente valor
//=== Compara valor e tipo