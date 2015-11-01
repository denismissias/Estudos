var texto = "";

for(var i = 0; i <= 20; i++) {
    if(i % 2 == 0) {
        if(i == 20) {
            texto += i;
            break;
        }
        texto += i + ", ";
    }
}

alert(texto);