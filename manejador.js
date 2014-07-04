#!/usr/bin/node
var fs = require('fs');

// cmomnentario
// var cuenta_1 = 1 ; 
// var cuenta_2 = 2 ; 




var head = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />'+
    '<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet">'+
    '</head>';



//manejador.js
function contador_1 (resp) {
    console.log("Funcion 1 ejecutada.");

    fs.readFile("contador_1.txt", function(err, data){
    	if (err) throw err;
    	var cuenta_1 = parseInt(data);
    	console.log(data);
  
    	resp.writeHead(200, {"Content-Type": "text/html"});
    	resp.write("Pagina cargada...." + String(cuenta_1) + " veces" + " <br>");
    	resp.write("<a href='/'> home </a> <br>");
    	cuenta_1 = cuenta_1 + 1; 
    	console.log("test 1");
    	fs.writeFile("contador_1.txt", cuenta_1, function(err) {
    		if(err) {
        		console.log(err);
    		} else {
        		console.log("The file was saved!");
    		}
	}); 

    	resp.end();
    });
};

function contador_2 (resp) {
    console.log("Funcion 2 ejecutada.");
    resp.writeHead(200, {"Content-Type": "text/html"});
    resp.write(head);
    resp.write("Pagina cargada...." + String(cuenta_2) + " veces" +" <br>");
    resp.write("<a href='/'> home </a> <br>");
    cuenta_2 = cuenta_2 + 1;
    resp.end();
};


function restart_1(resp){
    resp.writeHead(200,{"Content-Type": "text/html"});
    resp.write(head);
    resp.write("El contador 1 ahora vuelve ha vuelto a 0<br>");
    var cuenta_1 = 0;

    resp.write("<a href='/'> home </a> <br>");

    resp.end();
};

function restart_2(resp){
    resp.writeHead(200,{"Content-Type": "text/html"});
    resp.write(head);
    resp.write("El contador 2 ahora vuelve ha vuelto a 0<br>");
    var cuenta_2 = 0;

    resp.write("<a href='/'> home </a> <br>");

    resp.end();
};

function home(resp){
	resp.writeHead(200, {"Content-Type": "text/html"});
    resp.write(head);
	resp.write("Esta es la pagina de inicio <br>");
	resp.write("<a href='/contador_1'> CONTADOR 1 </a> <br>");
	resp.write("<a href='/contador_2'> CONTADOR 2 </a> <br>");
    resp.write("<a href='/restart_1'> Restablecer contador 1</a><br>");
    resp.write("<a href='/restart_2'> Restablecer contador 2</a><br>");
	resp.end();

};

exports.funcion_1 = contador_1;
exports.funcion_2 = contador_2;
exports.restart_1 = restart_1;
exports.restart_2 = restart_2;
exports.home = home; 
