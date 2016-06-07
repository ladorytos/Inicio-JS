//ejercicio.js
/*

//ejercicio1

var metros; 
var pulgadas;

metros = 30;
//o poner el valor y dará el resultado

pulgadas = metros / 0.0254;

alert ("las pulgadas son:" + pulgadas);
*/


// ejercicio 2

/*
var metros; 
var pulgadas;



metros = prompt ("por favor ingrese los metros");
pulgadas = metros / 0.0254;

alert ("las pulgadas son:" + pulgadas);
*/


// 3

function metros_a_pulgadas (metros){
	var pulgadas;
	pulgadas = metros / 0.0254;
	return pulgadas;
}


var metros = prompt ("por favor ingrese los metros");
var pulgadas = metros_a_pulgadas(metros);

alert ("las pulgadas son:" + pulgadas);






