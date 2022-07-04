/*¿Qué devuelven estos códigos?*/

//1.
let numbers =[22, 33, 54, 66, 72];
//console.log(numbers[numbers.length]); //undefined

//2.
let grupoDeAmigos =  ["Harry","Ron","Hermione","Spiderman","Hulk","Ironman","Penélope Glamour", "Pierre Nodoyuna","Patán" ]
//console.log(grupoDeAmigos[5]); //"Ironman"

//3.
let str = "un string cualquiera";
let arrayAleatorio= ["Digital", "House", "true", "string", "123","false", "54", str];
//console.log(arrayAleatorio[arrayAleatorio.length - 1]); // "un string cualquiera";


/* ------------------------------------------------------- */
/* ----------- Colecciones de películas (y más…) --------- */
/* ------------------------------------------------------- */

/*
El tech leader del equipo necesita conocer la estructura de datos del nuevo proyecto.
Para esto, deberás:
*/

/*
1. Crear la estructura adecuada para guardar las siguientes películas:
"star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"
Importante: verificá que todo funciona correctamente accediendo a alguna de
las películas una vez creada la estructura correspondiente.
*/
console.log('1. ------------------------------')
let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];

const imprimeArreglo = arreglo => {
    for(let i = 0;i < arreglo.length; i++){
        console.log(arreglo[i]);
    }
}

imprimeArreglo(peliculas);

/*
2. Más tarde, de producción dieron el aviso de que las películas deberían estar todas
en mayúsculas. Para esto solicitan que crees una función que reciba por
parámetro un array y convierta el contenido de cada elemento a mayúsculas.
Pista: revisá qué hace el método de strings .toUpperCase().
*/

console.log('2. ------------------------------')
const pasaMayuscula = arreglo => {
    for(let i = 0;i < arreglo.length; i++){
        arreglo[i] = arreglo[i].toUpperCase();
    }
}
pasaMayuscula(peliculas);
imprimeArreglo(peliculas);


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

let animadas =["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

const uneArreglos = (arrglo1, arrglo2) => {
    pasaMayuscula(arrglo2);
    for(let i = 0; i< arrglo2.length; i++){
        arrglo1.push(arrglo2[i])
    }
}

console.log('3. ------------------------------')
uneArreglos(peliculas,animadas);
imprimeArreglo(peliculas);

/*
4. Durante el proceso, uno de los desarrolladores advierte que el último elemento del
array de películas animadas es un videojuego. Ahora tenés que editar el código y
modificarlo de manera que puedas eliminar ese último elemento antes de migrar el
contenido al array que contenga todas las películas.
PD: por precaución, guardá el elemento que vas a eliminar en una variable.
*/

console.log('4. ------------------------------')
let juego = ''

const  eliminaUltimoElemento = arreglo => {
    juego = arreglo.pop();
}

eliminaUltimoElemento(peliculas);
console.log('juego : ' + juego);
imprimeArreglo(peliculas);

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
console.log('5. ------------------------------')

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

const calificaiones = (arreglo1,arreglo2,arreglo3) => {

    for(let i = 0; i< arreglo1.length; i++){
        if(arreglo2[i] == arreglo3[i]){
            console.log(`${arreglo1[i]} | ${arreglo2[i]} | ${arreglo3[i]} | CALIFICAION: IGUAL`)
        }else {
            console.log(`${arreglo1[i]} | ${arreglo2[i]} | ${arreglo3[i]} | CALIFICAION: DIFERENTE`)
        }
    }
}

calificaiones(peliculas,asiaScores,euroScores);