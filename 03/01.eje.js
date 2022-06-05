/* 1) Escribí un programa que le pida al usuario ingresar una frase y
la imprima en la consola.
Recordá que para pedirle al usuario que escriba una frase
debés utilizar el método prompt() y para escribir en la consola
debés utilizar el método console.log().
*/

const prompt = require("prompt-sync")({ sigint: true });

const imprimeFrase = () => {
	frase = prompt("Ingresar una frase: ");
	console.log(frase);
      }

imprimeFrase();
