// 1. A partir de el siguiente array de edades nos solicitan realizar lo siguiente:
const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];


// a. Obtener en un nuevo array las edades menores a 18.

const menoresDe18 = arreglo => {
    arregloMenores = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] < 18 ) {
            arregloMenores.push(arreglo[i]);
        }
    }
    return arregloMenores;
}

miNuevoArrglo = menoresDe18(edades);

console.log(miNuevoArrglo);


const obtenerMenor = arreglo => {
    let menor = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
        //console.log(arreglo[i]);
        if (menor > arreglo[i] ) {
            menor = arreglo[i];
        }
    }
    return menor;
}

console.log(obtenerMenor(edades));

// g. Incrementar en 1 todas las edades.
