/*
4) Escribí un programa que le pida al usuario su año de
nacimiento e imprima su edad actual en la consola con la frase
"Tienes X años" (siendo X la cantidad de años).
Por ejemplo, asumiendo que el año actual es 2019 y el usuario
ingresa 1999, el programa debe imprimir en la consola: “Tienes
20 años”.
*/

const prompt = require("prompt-sync")({ sigint: true });

const miEdad = ()  => {
const fecha = new Date();
const year = fecha.getFullYear();
   let edad = parseInt(prompt('Ingrese su fecha de nacimiento: '));
   console.log(`Tienes ${year - edad} años`);
   }

miEdad();
