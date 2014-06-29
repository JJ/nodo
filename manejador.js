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


function home(resp){
	resp.writeHead(200, {"Content-Type": "text/html"});
	resp.write("Esta es la pagina de inicio <br>");
	resp.write("<a href='/contador_1'> CONTADOR 1 </a> <br>");
	resp.write("<a href='/contador_2'> CONTADOR 2 </a> <br>");

	resp.end();

}

exports.funcion_1 = contador_1;
exports.funcion_2 = contador_2;
exports.home = home; 