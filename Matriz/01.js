/*
const sumaMatriz = (matriz) => {
    let acc = 0;
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        acc += matriz[i][j];
      }
    }
    return acc;
  };
*/

let m = [
  [0, 0, 3],
  [0, 5, 0],
  [7, 0, 0],
];

let mm = [
  [0, 2],
  [3, 0],
];

const generaMatrizCuadrada = (size) => {
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


n = generaMatrizCuadrada(2);

const printMatriz = (matriz) => {
  let acc = 0;
  let miString = "|";
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      miString += matriz[i][j] + "|";
    }
    console.log(miString);
    miString = "|";
  }
  return "";
};

console.log(printMatriz(m));
//console.log(printMatriz(m));



let  sumate = 0;
for (let i = 0; i < m.length; i++) {
  //for (let j = 0; j < m[i].length; j++) {
  //  if(i==j){
  //    sumate += (m[i][j]);
   // }
   //  }
  sumate += m[i][i]
}

let  sumate2 = 0;
for (let i = 0 ; i  < m.length ; i++) {
  //console.log('i: ' + i);
  //console.log(m[i].length);
  //for (let j = m[i].length - 1; j >=  0 ; j--) {
   // if(i==j){
      sumate2 += m[i][ m.length - (1 + i)];
      //console.log('[' + i  + '] + [' + j + ']')
      //console.log('m[i][j]: ' + m[i][j])
    //}
  //}
}

console.log(sumate2);
console.log(m[0][1]);

