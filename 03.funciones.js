const prompt = require("prompt-sync")({ sigint: true });

// FUNCIONES
// FUNCIONES DECLARADAS VS EXPRESADAS === ANONIMAS
// FUNCIONES EXPRESADAS DE TIPO FLECHA ( ARROW FUNCTION ) =>
// PARAMETROS EN LAS FUNCIONES


// FUNCIONES DECLARADAS / HOISTING
// INVOCAR O MANDAR A LLAMAR


// FUNCIONES EXPRESADAS / ANONIMAS

let restar = function(a,b){
    return a - b
}

restar()

// FUNCTION FLECHA / ARROW FUNCTION

let multiplicar = nombre => {
    let apellido = 'perez'
    let frase = "hola " + nombre + apellido + " " + "como estas?"
    //let frase2 = hola como estas ${nombre} cuantos años tenes ${apellido}
    return frase2
}
multiplicar()

/*
const SALUDAR = ( nombre )=>{

    console.log(hola ${nombre} como estas?)

}
*/
SALUDAR("manuel")
SALUDAR("carmen")
SALUDAR("jose")


function sumar( a, b ){

    let resultado = a + b

    return resultado

}
let resultadoFinal = sumar(12, 2)
let res = resultadoFinal / 2

console.log(resultadoFinal)