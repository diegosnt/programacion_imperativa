/**
 * 1) Seguir las instrucciones en este sandbox, para escribir y sumar los valores dentro
 * de una matriz.
 * https://codesandbox.io/s/mesa-17-ejercicio-1-yh91v?file=/src/index.js
 */

/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */

/**
 * Luego, escribe un algoritmo para sumar todos
 * los numeros en la matriz.
 */

// genera numeros randos pasando un minimo y un maximo
const numRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

// genera una matriz cuadrada de enteros, se ulizila la fucion numRandom
const generaMatrizCuadradaRandom = (size) => {
  let miMatriz = [];
  for (let i = 0; i < size; i++) {
    miMatriz[i] = [];
    for (let j = 0; j < size; j++) {
      miMatriz[i][j] = numRandom(1, 100);
    }
  }
  return miMatriz;
};

let matriz5x5 = [
  [92, 66, 23, 3, 95],
  [68, 14, 43, 52, 90],
  [34, 97, 90, 10, 75],
  [15, 93, 59, 65, 31],
  [7, 17, 7, 52, 18],
];

const sumaMatriz = (matriz) => {
  let acc = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      acc += matriz[i][j];
    }
  }
  return acc;
};

// console.log(sumaMatriz(matriz5x5));

// ---------------------------------------------------------------------------------------------------------------- //
/**
 *  2) Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10
 *  números. La matriz debe verse así:
 */

const generarMatriz10por10 = (size) => {
  let miMatriz = [];
  let acc = 1;
  for (let i = 0; i < size; i++) {
    miMatriz[i] = [];
    for (let j = 0; j < size; j++) {
      miMatriz[i][j] = acc;
      acc++;
    }
  }
  return miMatriz;
};
let matriz10por10 = generarMatriz10por10(10);
//console.log(matriz10por10);

// imprime matriz
const printMatriz = (matriz) => {
  let miString = "|";
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      miString += matriz[i][j].toString().padStart(3) + "|";
    }
    console.log(miString);
    miString = "|";
  }
  return "";
};

printMatriz(matriz10por10);

// ---------------------------------------------------------------------------------------------------------------- //
/** 
 * 3) Por último, vamos a generar dos funciones:
 * a) Una va a sumar los valores en la diagonal marcada en rojo.
 * b) La otra va a marcar los valores de la diagonal marcada en verde.
 * Ambas funciones deben devolver un resultado único.
 */

const sumaDiagonal1 = (matrix) => {
  let sumate = 0;
  for (let i = 0; i < matrix.length; i++) {
    sumate += matrix[i][i];
  }
  return sumate;
};

const sumaDiagonal2 = (matrix) => {
  let sumate = 0;
  for (let i = 0; i < matrix.length; i++) {
    sumate += matrix[i][matrix.length - (1 + i)];
  }
  return sumate;
};

console.log('Rojo: ' + sumaDiagonal1(matriz10por10));
console.log('Verde: ' + sumaDiagonal2(matriz10por10));
