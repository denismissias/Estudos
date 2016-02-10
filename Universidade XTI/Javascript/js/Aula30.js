var dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
var data = new Date();
/*
alert(data.getHours());
alert(data.getUTCHours());
alert(data.getDate()); // Dia do mês
alert(data.getDay()); // Dia da semana

alert(dias[data.getDay()]);

alert(data.getFullYear());
alert(data.getMilliseconds());
alert(data.getTime());
alert(data.getTimezoneOffset());
*/


data.setFullYear(data.getFullYear() + 5);

alert(data.toLocaleDateString());