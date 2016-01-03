var numeros = new Array("Um", "Dois", "Três");
var Carro = {
    Marca: "Nissan",
    Modelo: "350Z",
    Comprimento: "3.345mm",
    Velocidade: "320 km/h",
    Potência: "350cv"
}

//Maneira convencional
//for (var i = 0; i < numeros.length; i++) {
//    alert(numeros[i]);
//}

//Maneira simplificada like "foreach"
for (props in Carro) {
    alert(props + " = " + Carro[props]);
}