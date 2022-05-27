const prompt = require("prompt-sync")({ sigint: true });

// EJE 1-------------------
//1. Crear una función que convierta pulgadas en centímetros.
//Recibe por parámetro pulgadas y retorna su equivalente en centímetros.
const pulgadasCentimetros = pulgadas => pulgadas * 2.54;
let variablePulgadas = prompt("Ingresar puelgadas: ");
console.log(pulgadasCentimetros(variablePulgadas));


// EJE 2 -------------------
//Crear una función que recibe un string y lo convierte en una URL.
//Ej: “pepito” es devuelto como “http://www.pepito.com”
const generaUrl = dominio => `http://www.${dominio}.com`;
let variableDominio = prompt("Ingresar nombre del dominio: ");
console.log(generaUrl(variableDominio));
