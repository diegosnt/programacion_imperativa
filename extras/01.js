/*

Escriba una función que devuelva una cadena en la que 
el nombre se intercambie con el apellido.

"john McClane" --> "McClane john"

*/

let str1 = "john McClane"
/*
function nameShuffler(str){

    console.log((str.split(' ').reverse()).join(' ')) ;
  }
*/

//const nameShuffler = str => (str.split(' ').reverse()).join(' ')

const nameShuffler = str => (str.split(' ').reverse()).join(' ');
const nameShuffler = str => str.split(' ').reverse().join(' ');


console.log(nameShuffler(str1));


/*
function nameShuffler(str){
    //Shuffle It
  }

*/