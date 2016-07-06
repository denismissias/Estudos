//Utilizando objeto
//var regex = new RegExp('JavaScript');

//forma literal
//var regex = /Javascript/i;
//
//var string = "JavaScript";
//
//alert(regex.test(string));

//forma enxuta
//alert(/javascript/i.test("JavaScript"));
//alert(/doce/ig.exec("Qual é o Doce mais doce que o doce?"));

//var str = "Qual é o Doce mais doce que o doce?";
//alert(/doce/ig.exec(str));
//alert(str.match(/doce/ig));

//Verifica se há caracter preenchido
//alert(/./.test("Denis25"));

//Verificar se há letras, números e underline
//alert(/\w/.test("Denis25"));

//Verificar se há espaços
//alert(/\s/.test("Denis25"));

//Verificar se há números
//alert(/\d/.test("Denis25"));

//Verificar se há ocorrência no início 
//alert(/\^25/.test("Denis25"));

//Verificar se há ocorrência no final 
//alert(/\d$/.test("Denis25"));

//valida CEP
//alert(/^\d\d\d\d\d\-\d\d\d$/.test('01000-123'));

//Zero ou mais ocorrências de dígitos
//alert(/\d*/.test("Denis25"));

//Uma ou mais ocorrências de dígitos
//alert(/\d+/.test("Denis"));

//Zero ou uma ocorrência de dígito.
//alert(/\d?/.test("Denis"));

//valida CEP com quantificador
//alert(/^\d{5}-\d{3}$/.test('01000-123'));

//Valida data
//alert(/^\d{2}\/\d{2}\/\d{2,4}$/.test('12/02/80'));

//Valida email
//alert(/\w+@\w+\.\w{2,3}/.test('teste@gmail.com'));

//var str = "Qual é o Doce mais doce que o doce?";
//alert(str.match(/doce/ig));
//alert(str.replace(/doce/ig, "DOCINHO"));

//Alterando o padrão da url de "www.denis.com.br/clientes-2015.html" para "http://www.denis.com.br/2015/clientes.jsp"
var url = "www.denis.com.br/clientes-2015.html";
var regex = /www.denis.com.br\/\w{2,}-\d{4}\.html/;
alert(regex.test(url));
regex = /(www.denis.com.br)\/(\w{2,})-(\d{4})\.html/;
alert(url.replace(regex, "http://$1/$3/$2.jsp"));