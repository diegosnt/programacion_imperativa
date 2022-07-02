/*
Crear una función que imprima todos los dígitos decimales, del 0 al 9,
usando un ciclo For.

*/

const mostrarDecimales = () => {
    for (let i = 0.0; i <= 9; i+= 0.1){
        console.log(i.toFixed(1));
    } 
}
//mostrarDecimales();

/*
Crear una función que imprima los números entre el 5 y el 20, saltando de
tres en tres. https://codesandbox.io/s/mesa-21-ejercicio-2-3n0np
*/

const sumar3 = () => {
    for (let i = 5; i <= 20; i+= 3){
        console.log(i);
    } 
}

//sumar3()

/*
Crear una función que imprima la sumatoria de todos los números entre el
0 y el 100.
*/

const sumatoria0a100 = () => {
    let acc = 0;
    for (let i = 0; i <= 100; i++){
        acc+=i;
    } 
    console.log(acc);
}

sumatoria0a100();

/*
Crear una función que reciba un string y luego imprimir la cantidad de
vocales que se encuentran en dicha frase.
*/

const cuantaVocales = palabra => {
    let aux = palabra.toUpperCase();
    let conta = 0;
    for(let i = 0; i<= aux.length; i++){

        if (aux[i] == 'A' ||
            aux[i] == 'E' ||
            aux[i] == 'I' ||
            aux[i] == 'O' ||
            aux[i] == 'AU'
        ){
            conta++;
        }
    }
    return conta;
}

console.log(cuantaVocales('mate'));

/*
5. Realizar una función que, dada una lista, devuelva una nueva lista cuyo
contenido sea igual a la original pero invertida.
*/


const invertida = (lista) => {
    let aux = [];
    for (let i = lista.length - 1; i >= 0; i--) {
      aux.push(lista[i]);
    }
    return aux;
  };
  
console.log(invertida('colectivo'));