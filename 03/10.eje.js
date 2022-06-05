/*
10) Se ingresa por teclado un número natural de hasta 2 cifras, si
tiene una cifra que muestre lo mínimo que le falta para ser un
número de 2 cifras; de lo contrario, que muestre lo mínimo que
le falta para ser un número de 3 cifras. Considerar que el
usuario ingresa números de hasta dos cifras. 
*/

const prompt = require("prompt-sync")({ sigint: true });

const natural = () => {
	numero = parseInt(prompt("Ingresar un nuemro: "));
	if (numero < 10){
		console.log(`Le faltan ${10 - numero} para ser de 2 cifras`);	
	}
	else {
		console.log(`Le faltan ${100 - numero} para ser de 3 cifras`);
	}
}

natural();
