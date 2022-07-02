let matrix = [
  [2, 6, 7, 1, 3],
  [6, 1, 8, 12, 7],
  [7, 43, 12, 76, 12],
  [7, 12, 41, 12, 1],
  [5, 4, 32, 13,1]
];

//console.log(matrix[2][0]);
//console.log(matrix[2][1]);
//console.log(matrix[2][2]);

const sumaFila = (matriz, fila) => {
  let acc = 0;
  for (let i = 0; i < matriz[fila].length; i++) {
    acc += matriz[fila][i];
  }
  return acc;
};

console.log(sumaFila(matrix, 0));

const sumaColumna = (matriz, columna) => {
  let acc = 0;
  for (let i = 0; i < matriz.length; i++) {
    acc += matriz[i][columna];
  }
  return acc;
};

console.log(sumaColumna(matrix, 0));

const sumaMatriz = (matriz) => {
  let acc = 0;
  let miString = "|";

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      //acc += matriz[i][j];
      miString += matriz[i][j] + "|";
      //console.log(matriz[i][j]);
    }
    console.log(miString);
    miString = "|";
  }

  //return acc;
};

sumaMatriz(matrix);
