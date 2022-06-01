/*
¿Cuál es el número secreto?
Creá una función que reciba un parámetro numérico y verifique si el mismo es el
número secreto. El número secreto deberá ser seleccionado de manera random de
entre 1 y 10 —investigá qué hace la función Math.random()—. En caso de ser correcto,
retorna un mensaje felicitando al usuario y, en caso de que no acierte, retorna un
mensaje de aliento junto con el número ingresado y el secreto.
*/

const numeroSecreto = numero => {
    let numeroRandom = Math.trunc((Math.random() * 10) + 1);
    if (numeroRandom == numero) {
        return 'Felicitaciones!!!';
    } else {
        return `Seguí particimando!!! Número Ingresado: ${numero} / Número Random: ${numeroRandom}`
    }
}

console.log(numeroSecreto(1));