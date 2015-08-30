/*
    Função: ligar();
    Autor: Denis de Sousa Missias
    Descrição: Apresenta o nome do usuário e liga a lâmpada
*/
function ligar() {
    var nome = window.prompt("Qual o seu Nome?");

    alert("Prazer em conhecer você" + nome);
    
    document.getElementById("xti").src = "img/lampada_ligada.png";
}