function calcularIMC() {
    var formulario = document.getElementById("formulario");
    
    var kilos = parseInt(formulario.kilos.value);
    var metros = parseInt(formulario.metros.value);
    var centimetros = parseInt(formulario.centimetros.value);
    var altura = ((metros * 100) + centimetros) / 100;
    var imc = kilos / (altura * altura);
    
    formulario.imc.value = imc.toFixed(2);
    
    if (imc < 20) {
        spnMensagem.textContent = "Abaixo do Peso";
    } else if (imc > 20 && imc <= 25) {
        spnMensagem.textContent = "Peso Ideal";
    } else if (imc > 25 && imc <= 30) {
        spnMensagem.textContent = "Sobrepeso";
    } else if (imc > 30 && imc <= 35) {
        spnMensagem.textContent = "Obesidade Moderada";
    } else if (imc > 35 && imc <= 40) {
        spnMensagem.textContent = "Obesidade Severa";
    } else if (imc > 40 && imc <= 50) {
        spnMensagem.textContent = "Obesidade Mórbida";
    } else {
        spnMensagem.textContent = "Super Obesidade";
    }
}