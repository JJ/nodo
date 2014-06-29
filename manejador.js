#!/usr/bin/node

// cmomnentario
var cuenta_1 = 1 ; 
var cuenta_2 = 2 ; 

//manejador.js
function contador_1 (resp) {
    console.log("Funcion 1 ejecutada.");

    resp.writeHead(200, {"Content-Type": "text/html"});
    resp.write("Pagina cargada...." + String(cuenta_1) + " veces" + " <br>");
    resp.write("<a href='/'> home </a> <br>");
    cuenta_1 = cuenta_1 + 1; 
    console.log("test 1");
    resp.end();
}

function contador_2 (resp) {
    console.log("Funcion 2 ejecutada.");
    resp.writeHead(200, {"Content-Type": "text/html"});
    resp.write("Pagina cargada...." + String(cuenta_2) + " veces" +" <br>");
    resp.write("<a href='/'> home </a> <br>");
    cuenta_2 = cuenta_2 + 1;
    resp.end();
}


function restart_1(resp){
    resp.writeHead(200,{"Content-Type": "text/html"});
    resp.write("El contador 1 ahora vuelve ha vuelto a 0<br>");
    var cuenta_1 = 0;

    resp.write("<a href='/'> home </a> <br>");

    resp.end();
}

function restart_2(resp){
    resp.writeHead(200,{"Content-Type": "text/html"});
    resp.write("El contador 2 ahora vuelve ha vuelto a 0<br>");
    var cuenta_2 = 0;

    resp.write("<a href='/'> home </a> <br>");

    resp.end();
}

function home(resp){
	resp.writeHead(200, {"Content-Type": "text/html"});
	resp.write("Esta es la pagina de inicio <br>");
	resp.write("<a href='/contador_1'> CONTADOR 1 </a> <br>");
	resp.write("<a href='/contador_2'> CONTADOR 2 </a> <br>");
    resp.write("<a href='/restart_1'> Restablecer contador 1</a><br>");
    resp.write("<a href='/restart_2'> Restablecer contador 2</a><br>");
	resp.end();

}

exports.funcion_1 = contador_1;
exports.funcion_2 = contador_2;
exports.restart_1 = restart_1;
exports.restart_2 = restart_2;
exports.home = home; 