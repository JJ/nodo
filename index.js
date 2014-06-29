#!/usr/bin/node


//index.js
var servidor = require('./servidor'); //Importamos el módulo servidor creado
var router = require('./router'); //Importamos el módulo router
var manejadores = require('./manejador'); //Importamos el módulo manejador
var manejador = {};



manejador["/"] = manejadores.home;
manejador["/contador_1"] = manejadores.funcion_1;
manejador["/contador_2"] = manejadores.funcion_2;
manejador["/restart_1"] = manejadores.restart_1;
manejador["/restart_2"] = manejadores.restart_2;

servidor.inicializar(router.route, manejador); 