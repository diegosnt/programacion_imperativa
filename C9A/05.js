/* ------------------------------------------------------- */
/* ---------------- TMás ejercicios             ---------- */
/* ------------------------------------------------------- */



/*
1) Escribí un programa que le pida al usuario ingresar una frase y
la imprima en la consola.
Recordá que para pedirle al usuario que escriba una frase
debés utilizar el método prompt() y para escribir en la consola
debés utilizar el método console.log().
*/
const prompt = require("prompt-sync")({ sigint: true });

const imprimeFrase = () => {
    frase = prompt("Ingresar una frase: ")
    console.log(frase);
}

//imprimeFrase();

/*
2) Escribí un programa que le pregunte al usuario su nombre e
imprima "Hola " seguido del nombre y un signo de
exclamación.
Por ejemplo, si el usuario ingresa "Pedro" el programa debe
imprimir en la consola "Hola Pedro!".
*/

const imprimirHola = nombre => `Hola ${nombre}!!!`;

//console.log(imprimirHola('Diego'));

/*
3) Escribí un programa que le pida al usuario ingresar un número,
luego le pida un segundo número, e imprima en la consola la
suma de los dos números que ingresó el usuario.
*/

const sumaNumeros = () => {
    let num1 = parseInt(prompt("Ingresar el primer número:  "));
    let num2 = parseInt(prompt("Ingresar el segundo número: "));

    return num1 + num2;
}

//console.log(sumaNumeros());

/*
4) Escribí un programa que le pida al usuario su año de
nacimiento e imprima su edad actual en la consola con la frase
"Tienes X años" (siendo X la cantidad de años).
Por ejemplo, asumiendo que el año actual es 2019 y el usuario
ingresa 1999, el programa debe imprimir en la consola: “Tienes
20 años”.
*/

const calculaEdad = () => {
    let nacimiento = parseInt(prompt("Ingresar el año de nacimiento: "));
    var y = new Date().getFullYear();
    return y - nacimiento;
}

//console.log(calculaEdad());

/*
5) Escribí un programa que piense un número de forma aleatoria
del 1 al 10 y le pida al usuario que lo trate de adivinar. Si el
número es correcto debe imprimir en la consola "Felicitaciones,
ese era!", de lo contrario, debe imprimir "Lo siento, intenta
nuevamente!"
*/

const numeroSecreto = () => {
    numeroRandom = Math.floor((Math.random() * 10 ) + 1);

    let numero = parseInt(prompt("Ingresar un numero: "));

    if (numero === numeroRandom){
        mensaje = `Felicitaciones,ese era!!!! ${numeroRandom} = ${numero}`;
    } else {
        mensaje = `Lo siento, intenta nuevamente!!!! ${numeroRandom} != ${numero}`;
    }

    return mensaje;
}

//console.log(numeroSecreto());

/*
6) Escribí un programa que imprima los números pares del 0 al
100.
*/

const imprime0a100 = () => {
    for(let i = 0; i<= 100; i++){
        console.log(i);
    }
}

//imprime0a100();

/*
7) Escribí un programa que itere sobre el arreglo nombres e
imprima cada uno en la consola: const nombres = ["Pedro",
"Pablo", "Maria", "Juan", "Diana"];
*/

const nombres = ["Pedro", "Pablo", "Maria", "Juan", "Diana"];

const imprimeArreglo = arreglo =>{
    for (let i = 0; i< arreglo.length; i++){
        console.log(arreglo[i]);
    }
}

//imprimeArreglo(nombres);

/*
8) Construí un pseudocódigo que permita ingresar un número, si
el número es mayor de 500, se debe calcular y mostrar en
pantalla el 18% de este.
*/

const calcula18 = () => {
    let numero = parseInt(prompt("Ingresar un numero: "));
    //if(numero > 500)

    console.log( numero>500?`El 18% de ${numero} es ${numero*0.18}`:`${numero} es menor a 500`);
}

//calcula18();

/*
9) Escribí una función llamada elemento que recibe un arreglo
como parámetro. La función debe devolver el valor que se
encuentra en la tercera posición. Si el arreglo no tiene al menos
3 elementos deberá retornar -1.
*/

const numeritos = [11,33,55];
const elemento = arreglo => arreglo.length<3?-1:arreglo[2];

// console.log(elemento(numeritos));

/*
10) Se ingresa por teclado un número natural de hasta 2 cifras, si
tiene una cifra que muestre lo mínimo que le falta para ser un
número de 2 cifras; de lo contrario, que muestre lo mínimo que
le falta para ser un número de 3 cifras. Considerar que el
usuario ingresa números de hasta dos cifras.
*/

const cifras = () =>{
    let numero = parseInt(prompt("Ingresar un numero: "));
    let faltan = 0;
    if (numero >= 0 && numero < 10 ){
        faltan = 10 - numero;
    } else if (numero >= 10 && numero < 100){
        faltan = 100 - numero;
    } else {
        faltan = -1; // numero negativo o mayor a 100
    }

    return faltan;
}

//console.log(cifras());

/*
12)
Hacer un programa que calcule la suma de los N primeros
números naturales, dónde N es el número límite ingresado por
teclado.
*/

const sumaHsta = () => {
    let suma = 0;
    let numero = parseInt(prompt("Ingresar un numero: "));
    for(let i = 1;i < numero; i++){
        suma += i;
    }
    return suma;
}

console.log(sumaHsta());
