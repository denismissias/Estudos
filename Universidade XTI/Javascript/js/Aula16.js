var numero = 15;

if ((numero % 2) === 0) {
    alert("Par");
} else {
    alert("Ímpar");
}

var idade = 55;

if (idade <= 11) {
    alert("Criança");
} else if (idade > 11 && idade <= 16) {
    alert("Pré-adolescente");
} else if (idade > 16 && idade <= 21) {
    alert("Adolescente");
} else if (idade > 21 && idade < 60) {
    alert("Adulto");
} else {
    alert("Idoso");
}

var nota = 6;

if (nota >= 7) {
    alert("Aprovado");
} else {
    alert("Reprovado");
    if (nota == 6) {
        alert("Você está em recuperção");
    }
}