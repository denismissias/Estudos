var Carro = {
    marca : "Nissan",
    modelo : "350Z",
    potencia : {
        cavalos : "350",
        velocidade : "320 km/h"
    }
};

with (Carro.potencia) {
    alert(cavalos);
    alert(velocidade);
}