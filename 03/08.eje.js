/*
8) Construí un pseudocódigo que permita ingresar un número, si
el número es mayor de 500, se debe calcular y mostrar en
pantalla el 18% de este. 
 */
const prompt = require("prompt-sync")({ sigint: true });


const porcentaje = () => {
	let numero = parseInt(prompt("Ingresar un numero: "));
	if(numero > 500){
		console.log(numero*0.18);
	}
}

porcentaje();
