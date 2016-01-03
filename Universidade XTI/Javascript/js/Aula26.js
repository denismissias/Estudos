var x = new String("Texto dentro de texto de aspas");
document.writeln(x + "<br />");
document.writeln(x.length + "<br />");
document.writeln(x.charAt(x.length - 1) + "<br />");
document.writeln(x.charCodeAt(x.length - 1) + "<br />");
document.writeln(x.concat(" JavaScript") + "<br />");
document.writeln(String.fromCharCode(111, 221, 333) + "<br />");
document.writeln(x.indexOf("dentro") + "<br />");
document.writeln(x.lastIndexOf("texto") + "<br />");
document.writeln(x.replace("texto", "txt") + "<br />");
document.writeln(x.substring(5, 8) + "<br />"); //Retorna carecteres entre dois índices
document.writeln(x.substr(5, 8) + "<br />"); //Retorna a partir de um indice
document.writeln(x.slice(5, 8) + "<br />"); //Mesma coisa que substring, porém mais rigoroso
document.writeln(x.split(" ")[0] + "<br />");
document.writeln(x.toUpperCase() + "<br />");
document.writeln(x.toLowerCase() + "<br />");
document.writeln(x.big() + "<br />");
document.writeln(x.blink() + "<br />");
document.writeln(x.sup() + "<br />");
document.writeln(x.strike() + "<br />");
document.writeln(x.bold() + "<br />");
document.writeln(x.italics() + "<br />");
document.writeln(x.small() + "<br />");
document.writeln(x.link("http://www.globo.com") + "<br />");
document.writeln(x.fontcolor("green") + "<br />");