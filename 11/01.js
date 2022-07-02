/*
1) Escribir un programa que muestre en pantalla los números del 1 al 100,
sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por
“buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 —o de 15—,
por la palabra “fizzbuzz”. Visiten este sandbox
https://codesandbox.io/s/fizzbuzz-3e9uc?file=/src/index.js para realizar
el ejercicio ahí. Recuerden desplegar la consola para ver sus resultados, y
utilicen la función console.log para mostrar datos en la misma.
*/

const fizzbuzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    }

    if (i % 3 === 0 && i % 5 !== 0) {
      console.log(i + "- fizz");
    }
    if (i % 5 === 0 && i % 3 !== 0) {
      console.log(i + " - buzz");
    }
    if (i % 3 !== 0 && i % 5 !== 0) {
      console.log(i + " - " + i);
    }
  }
};

//fizzbuzz();

/*
2) Escriban una función que reciba dos parámetros: un array y un índice. La
función deberá de mostrar por consola el valor del elemento según el
índice dado. Por ejemplo, dada la siguiente array e índice, la función
imprimirá '6'. let array =
[3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; var index = 1;
Visiten este sandbox para escribir su código.
https://codesandbox.io/s/busqueda-en-array-025me?file=/src/index.js
*/

const imprimeIndice = (arreglo, indice) => {
    return arreglo[indice];
}

let array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; 
var index = 1;

console.log(imprimeIndice(array,index));

