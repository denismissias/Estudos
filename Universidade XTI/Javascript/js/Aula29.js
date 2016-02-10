window.onload = function() {
    carregarPoltronas();
}

var poltronas = [false, true, false, true, true, true, false, true, false];

function carregarPoltronas() {
    var imagens = document.getElementsByTagName("img");
    
    for(var i = 0; i < imagens.length; i++) {
        if(poltronas[i]) {
            imagens[i].src = "img/ball_disponivel.png";
            imagens[i].width = 100;
            imagens[i].height = 150;
        } else {
            imagens[i].src = "img/ball_indisponivel.png";
            imagens[i].width = 100;
            imagens[i].height = 150;
        }
    }
}

function selecionarPoltrona() {
    var imagens = document.getElementsByTagName("img");
    for(var i = 0; i < poltronas.length; i++) {
        if(poltronas[i]) {
            imagens[i].src = "img/ball_selecionada.png";
            imagens[i].width = 125;
            imagens[i].height = 135;
            
            var sim = confirm("Você quer esta Poltrona?");
            
            if(sim) {
                break;
            } else {
                imagens[i].src = "img/ball_disponivel.png";
                imagens[i].width = 100;
                imagens[i].height = 150;
            }
            
        }
    }
}

function selecionarCasal() {
    var imagens = document.getElementsByTagName("img");
    for(var i = 0; i < poltronas.length; i++) {
        if(poltronas[i] && poltronas[i + 1]) {
            imagens[i].src = "img/ball_selecionada.png";
            imagens[i].width = 125;
            imagens[i].height = 135;
            imagens[i + 1].src = "img/ball_selecionada.png";
            imagens[i + 1].width = 125;
            imagens[i + 1].height = 135;
            
            var sim = confirm("Você quer estas Poltronas?");
            
            if(sim) {
                break;
            } else {
                imagens[i].src = "img/ball_disponivel.png";
                imagens[i].width = 100;
                imagens[i].height = 150;
                imagens[i + 1].src = "img/ball_disponivel.png";
                imagens[i + 1].width = 100;
                imagens[i + 1].height = 150;
            }
            
        }
    }
}