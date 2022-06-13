function reemplazoFastFast(texto, busca, reemplaza){
    return texto.replace(busca, reemplaza);
}

// console.log(reemplazoFastFast("hola como estas", "hola", "chau"));


function menciona(texto, palabra){
    return texto.indexOf(palabra)!=-1?true:false
}

/*
console.log(menciona("hola como estas", "hola"));
console.log(menciona("hola como estas", "chau"));

console.log(menciona('Existen muchos lenguajes de programación y JavaScript es uno de ellos','programacin')); // true

*/

/*
Teniendo como punto de partida la cadena de texto '¡Hola!, soy Carli', 
almacenada en la variable 'frase' deberemos recortarla para poder obtener 
el nombre 'Carli' en una nueva variable llamada licenciada.

IMPORTANTE: Para la resolución tendremos que usar la función slice().
*/

let frase = 'Hola!, soy Carli';

let licenciada = frase.slice(11);

console.log(licenciada)

