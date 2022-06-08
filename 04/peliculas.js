// EQUIPO 4 #CAMADA 7 - Agustina Mastricola / Martin Elias Dellugo / Nicolas Sanchez / Tomás Agustin Costa / Diego Santacruz

/*
Colecciones de películas (y más…)
El tech leader del equipo necesita conocer la estructura de datos del nuevo proyecto.
Para esto, deberás:

1. Crear la estructura adecuada para guardar las siguientes películas:
"star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"
Importante: verificá que todo funciona correctamente accediendo a alguna de
las películas una vez creada la estructura correspondiente.
*/

let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];

console.log(peliculas[2]);

/*
2. Más tarde, de producción dieron el aviso de que las películas deberían estar todas
en mayúsculas. Para esto solicitan que crees una función que reciba por
parámetro un array y convierta el contenido de cada elemento a mayúsculas.
Pista: revisá qué hace el método de strings .toUpperCase().
*/

const mayusculas = arreglo => {
    for (let i = 0; i < arreglo.length; i++) {
        arreglo[i] = arreglo[i].toUpperCase();
    }
}

mayusculas(peliculas);
console.log(peliculas);

/*
3. Mientras trabajabas en el feature anterior, se dio el aviso de que también hay que
crear otra estructura similar a la primera, pero con las siguientes películas
animadas:
"toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
Por lo tanto, te piden crear una función que reciba dos arrays como parámetros,
para poder agregar los elementos contenidos en el segundo array dentro del
primero, y así retornar un solo array con todas las películas como sus elementos.
Importante: las películas animadas también deberían convertirse a mayúsculas.
*/

let peliculasNuevas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

const sacaJuego = arreglo => arreglo.pop();


let juego = sacaJuego(peliculasNuevas)

mayusculas(peliculasNuevas);

const sumaPeliculas = (arreglo1, arreglo2) => {

    for (let i = 0; i < arreglo2.length; i++) {
        arreglo1.push(arreglo2[i]);
    }
}
sumaPeliculas(peliculas, peliculasNuevas);
console.log(peliculas);

/*
4. Durante el proceso, uno de los desarrolladores advierte que el último elemento del
array de películas animadas es un videojuego. Ahora tenés que editar el código y
modificarlo de manera que puedas eliminar ese último elemento antes de migrar el
contenido al array que contenga todas las películas.
PD: por precaución, guardá el elemento que vas a eliminar en una variable.
*/

//const sacaJuego = arreglo => arreglo.pop();

//let juego = sacaJuego(peliculasNuevas)
console.log(peliculasNuevas);
console.log(juego);

/*
5. Finalmente, te envían dos arrays con calificaciones que hacen distintos usuarios
del mundo sobre las películas con el siguiente formato:

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

Te piden crear una función que compare las calificaciones e indique si son iguales
o diferentes. Te confirman que están en el orden adecuado y que solo traen
valores numéricos del 1 al 10.

PD: los elementos de los scores tanto de Asia como de Europa corresponden en
orden al del array resultante de combinar películas con películas animadas. Es
decir, el primer elemento del array de películas general corresponde al primer
elemento de asiaScores y al primer elemento de euroScores, y así sucesivamente.
Para verificar que hasta acá viene todo bien, te recomendamos probar cada una de las
funciones y testear su correcto funcionamiento.
Si llegaste hasta este punto y está todo bien, el tech leader del equipo debe estar
extremadamente alegre con tu trabajo y desempeño. ¡Buen trabajo!
*/

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];


const comparaScoresPeliculas = (peliculas, score1, score2) => {
    for (let i = 0; i < peliculas.length; i++) {
        comparaScore = score1[i] == score2[i]? 'Tienen la misma califiacion': 'Tienen diferente califiacion'
        console.log(`${ peliculas[i]} || Score 1: ${ score1[i]} ||  Score 2: ${ score2[i]} || ${comparaScore}` );
    }
}

comparaScoresPeliculas(peliculas, asiaScores, euroScores)