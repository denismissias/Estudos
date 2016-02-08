/*
var pessoas = new Array(new Array("Ricardo", "M"), new Array("Sandra", "F"));

alert(pessoas[1][0]);
*/

var frutas = ["Cupuaçu", "Banana", 123, "Graviola", "Laranja"];

function todos(elemen, indice, obj) {
    return(typeof elemen == "string");
}

alert(frutas.every(todos)); //Every avalia todos elementos

alert(frutas.filter(todos)); //Retorna elementos que atenda a condição

alert(frutas.map(todos)); //Altera os elementos