// EQUIPO 4 - Fabricio Daniel Turrina / Macarena Merlo / Salem Ali / Tomás Agustin Costa / Daniela Riquelme / Diego Santacruz

//1. Crear un archivo calculadora.js que contendrá las distintas operaciones a realizar de nuestra calculadora.

const prompt = require("prompt-sync")({ sigint: true });

// NIVEL I   ------------------------------------------------------

//2. Crear una función sumar, esta deberá recibir dos parámetros y retornar la suma de los mismos.
const suma = (numA, numB) => numA + numB;

//3. Crear una función restar, la cual deberá recibir dos parámetros y retornar la resta del primero menos el segundo.
const resta = (numA, numB) => numA - numB;

//4. Crear una función multiplicar, la misma deberá recibir dos parámetros y retornar el resultado de su multiplicación.
const multiplicar = (numA, numB) => numA * numB;

//5. Crear una función dividir, la cual recibirá dos parámetros y retornar el resultado de la división del primero sobre el segundo. 
const dividir = (numA, numB) => numA / numB;



// NIVEL II  ------------------------------------------------------

console.log("-------------- Testeo de Operaciones / Calculadora --------------");

// Se utiliza parseInt() para convertir en entero el numero ingresado
let  nA = parseInt(prompt("Ingresar el numero A: "));
let  nB = parseInt(prompt("Ingresar el numero B: "));

console.log(`  SUMA:        ${nA} + ${nB} = ${suma(nA, nB)}`);
console.log(`  RESTA:       ${nA} - ${nB} = ${resta(nA, nB)}`);
console.log(`  MULTIPLICAR: ${nA} * ${nB} = ${multiplicar(nA, nB)}`);
console.log(`  DIVIDIR:     ${nA} / ${nB} = ${dividir(nA, nB)}`);



// NIVEL III ------------------------------------------------------

console.log("");
//1. Crear una función que se llame cuadradoDeUnNumero, la cual recibe un
//número como parámetro y deberá retornar ese número elevado al cuadrado.
//Importante: cuadradoDeUnNumero() deberá utilizar la función multiplicar() para
//calcular el cuadrado del parámetro ingresado a cuadradoDeUnNumero()

console.log("-- Cuadrado De Un Numero -- ");

const cuadradoDeUnNumero = numC => multiplicar(numC,numC);

let  nC = parseInt( prompt("Ingresar el numero C: ") );

console.log(`  CUADRADO:  ${nC} ^ 2 = ${cuadradoDeUnNumero(nC)}`);

console.log("");
//2. Crear la función promedioDeTresNumeros, la misma deberá calcular el promedio
//de 3 números, que serán ingresados por parámetro.
//Importante: promedioDeTresNumeros() deberá utilizar algunas funciones
//previamente creadas de nuestra calculadora.

console.log("-- Promedio De Tres Numeros -- ");

const promedioDeTresNumeros = (num1,num2, num3)=> dividir(suma(suma(num1, num2), num3),3);

nA = parseInt(prompt("Ingresar el numero A: "));
nB = parseInt(prompt("Ingresar el numero B: "));
nC = parseInt(prompt("Ingresar el numero C: "));

console.log(`  PROMEDIO DE TRES NUMEROS: (${nA} + ${nB} +  ${nC}) / 3 = ${promedioDeTresNumeros(nA,nB,nC)}`);

console.log("");
//3.Crear la función calcularPorcentaje. Esta recibirá dos parámetros: el número
//total y el porcentaje que se le quiere calcular. Deberá retornar el x% del total.
//Ejemplo: calcularPorcentaje(300, 15) debe retornar 45, ya que es el 15% de 300.
//Importante: calcularPorcentaje() deberá utilizar algunas funciones previamente
//creadas de nuestra calculadora.

console.log("-- Calcular Porcentaje -- ");

const calcularPorcentaje = (total, porcentaje) => dividir(multiplicar(total,porcentaje), 100);

let numTotal = parseInt(prompt(" Ingresar el Total: ") );
let numPorcentaje = parseInt(prompt(" Ingresar el Porcentaje: ") );

console.log(`  PORCENTAJE: EL ${numPorcentaje}% DE ${numTotal} ES: ${calcularPorcentaje(numTotal,numPorcentaje)}`);

console.log("");
//4. Crear una función GeneradorDePorcentaje que recibe dos parámetros y deberá
//retornar el porcentaje del primero con respecto al segundo.
//Importante: GeneradorDePorcentaje() deberá utilizar algunas funciones
//previamente creadas de nuestra calculadora.
//Ejemplo: GeneradorDePorcentaje(2, 200) deberá retornar 1, ya que 2 es el 1% de 200.

console.log("-- Generador De Porcentaje -- ");

const GeneradorDePorcentaje = (parte, total ) => dividir(multiplicar(parte,100), total);

let numParte = parseInt(prompt(" Ingresar el Parte: ") );
numTotal = parseInt(prompt(" Ingresar el Total: ") );

console.log(`  GENERADOR:  ${numParte} ES EL ${GeneradorDePorcentaje(numParte,numTotal)}% DE ${numTotal}`);