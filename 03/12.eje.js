/*
12)
Hacer un programa que calcule la suma de los N primeros
números naturales, dónde N es el número límite ingresado por
teclado.
*/

const prompt = require("prompt-sync")({ sigint: true });

const sumaPrimeros = () => {
	let numero = parseInt(prompt('Ingresar numero: ')); 
	let total = 0;	
	for(let i = 1; i <= numero; i++  ){
		total += i;
	}
	console.log('Total: ' + total);
}

sumaPrimeros();
