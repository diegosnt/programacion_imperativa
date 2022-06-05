/*
3) Escribí un programa que le pida al usuario ingresar un número,
luego le pida un segundo número, e imprima en la consola la
suma de los dos números que ingresó el usuario.
*/

const prompt = require("prompt-sync")({ sigint: true });

const sumando = () => {
   let num1 = parseInt(prompt('Ingresar el primer numero: '));
   let num2 = parseInt(prompt('Ingresar el segundo numero: '));

	console.log(`Total= ${num1 + num2}`);
}

sumando();
