/*
2) Escribí un programa que le pregunte al usuario su nombre e
imprima "Hola " seguido del nombre y un signo de
exclamación.
Por ejemplo, si el usuario ingresa "Pedro" el programa debe
imprimir en la consola "Hola Pedro!".
*/
const prompt = require("prompt-sync")({ sigint: true });

const holaUsuario = () => {
    nombre = prompt("Ingrese su nombre: ");
    console.log(`hola ${nombre}!!! `);
}

holaUsuario();
