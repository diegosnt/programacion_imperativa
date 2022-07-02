// Diego Sanyacruz -  Camada  7 - PARCIAL JUNIO 2022 TEMA A - Clase 15 - 2022/06/17

/*
Ejercicio 1:
Desarrollar una función para cada uno de las siguientes apartados:
Que reciba por parámetro un número entero y retorne su triple.
Que reciba por parámetro dos números enteros y retorne la multiplicación de ambos.
Que reciba por parámetro dos números enteros, verificar que sean distintos de 0 y retorne la división de ambos.
*/

const retornaTriple = (numero) => numero * 3;
console.log("retornaTriple: " + retornaTriple(2));

const retornaMultiple = (numero1, numero2) => numero1 * numero2;
console.log("retornaMultiple: " + retornaMultiple(2, 5));

const retornaDvision = (numero1, numero2) => {
    if (numero1 == 0 || numero2 == 0) {
        return "los numeros deben ser distinto de 0";
    }
    return numero1 / numero2;
};

console.log("retornaDvision: " + retornaDvision(0, 5));
console.log("retornaDvision: " + retornaDvision(20, 5));

/* -------------------------------------------------------------------------- */

/*
Ejercicio 2:
1. Deberás escribir un objeto literal llamado turista que contenga las siguientes propiedades que deberás completar con tus datos:
a. nombre
b. apellido
c. temperatura
d. está Vacunado (TRUE/FALSE)


2. Teniendo en cuenta los datos del punto número 1:
A. Crear una función que reciba por parámetro el objeto y retorne un string en base a las siguientes condiciones :

-	si temperatura es menor a 37:  “puede pasar”,
-	si temperatura es mayor o igual a 37 y menor que 39 y si está vacunado: “puede pasar porque está vacunado”
-	si temperatura es 39 o mayor: “no puede pasar“
    *Deberás realizar la invocación de la función de forma que se pueda ver el resultado

*/

const turista = [
    {
        nombre: "Diego",
        apellido: "Santacruz",
        temperatura: 36,
        estaVacunado: true,
    }
];

const controlAcceso = (arreglo) => {
    for (let i = 0; i < arreglo.length; i++) {
        //-	si temperatura es menor a 37:  “puede pasar”,
        if (arreglo[i].temperatura < 37) {
            return "puede pasar";
        }
        //-	si temperatura es mayor o igual a 37 y menor que 39 y si está vacunado: “puede pasar porque está vacunado”
        if (
            arreglo[i].temperatura >= 37 &&
            arreglo[i].temperatura < 39 &&
            arreglo[i].estaVacunado
        ) {
            return "puede pasar porque está vacunado";
        }
        //-	si temperatura es 39 o mayor: “no puede pasar“
        if (arreglo[i].temperatura >= 39) {
            return "no puede pasar";
        }
    }
};
//*Deberás realizar la invocación de la función de forma que se pueda ver el resultado
console.log(controlAcceso(turista));

/* -------------------------------------------------------------------------- */

/*
Ejercicio 3:
1. Crear un array VACÍO llamado destinos.
2. Dados estos tres objetos:
*/


let brasil = {
    cantidadDeVisitas: 3,
    clima: "soleado",
    habitantes: "212 millones"
}

let rusia = {
    cantidadDeVisitas: 4,
    clima: "frío",
    habitantes: "144 millones"
}

let estadosUnidos = {
    cantidadDeVisitas: 1,
    clima: "nublado",
    habitantes: "329 millones"
}

/*
a. Agregarlos al array. (utilizando un método JS, pensa cuál podrías utilizar)
b. Mostrar por consola el array para ver que contenga esos objetos.

3. Crea una función que reciba el array destinos como parámetro, e incremente en 1 la
cantidad de visitas de cada uno de los destinos, llámala siguienteViaje.
* Debes utilizar alguna estructura de repetición vista en clase.
4.
Mostrar por consola el array de destinos antes y después de la ejecución de la función.
*/

const destino = [];
destino.push(brasil, rusia, estadosUnidos);
console.log(destino);

const siguienteViaje = arreglo => {
    for (let i = 0; i < arreglo.length; i++) {
        arreglo[i].cantidadDeVisitas++;
    }
}


siguienteViaje(destino)
console.log(destino);
