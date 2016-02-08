var paises = new Array("Brasil", "Rússia", "India", "China", "Africa do Sul");
/*
paises[0] = "BRAZIL";

for(var i = 0; i < paises.length; i++)
    alert(paises[i]);

alert(paises.length);

alert(paises.indexOf("Rússia"));

alert(paises.lastIndexOf("Rússia"));

alert(paises.reverse());

alert(paises.join(" - "));

alert(paises.concat("EUA", "Argentina"));

alert(paises.slice(2, 4));

alert(paises.splice(2, 2, "Abacate", "Acerola", "Umbu", "Cupuaçu"));

alert(paises);
*/

alert(paises.push("Argentina")); //Adiciona no fim da fila
alert(paises);

alert(paises.shift()); //Remove o primeiro elemento da fila
alert(paises);

alert(paises.pop()); //Remove o último elemento da fila
alert(paises);

alert(paises.unshift("EUA")); //Adiciona no início da fila
alert(paises);