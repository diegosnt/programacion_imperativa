/*
1. Crear una función que convierta pulgadas en centímetros.
Recibe por parámetro pulgadas y retorna su equivalente en centímetros.
*/
const pulgadasCentimetros = pulgadas => pulgadas * 2.54;
console.log(pulgadasCentimetros(1));

/*
2. Crear una función que recibe un string y lo convierte en una URL.
Ej: “pepito” es devuelto como “http://www.pepito.com”
*/
const palabraUrl = palabra => `http://www.${palabra}.com`;
console.log(palabraUrl('texto'));

/*
3. Crear una función que recibe un string y devuelve la misma frase pero con
admiración.
*/
const palabraAdmiracion = palabra => `${palabra}!!!`
console.log(palabraAdmiracion('hola'));

/*
4. Crear una función que calcule la edad de los perros, considerando que 1 año
para nosotros son 7 de ellos.
*/
const edadPerro = edad => edad * 7;
console.log(edadPerro(5));

/*
5. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
sueldo mensual como parámetro.
PD: considerá que tu mes de trabajo tiene 40 horas.
*/
const valorHoraTrabajo = suledo => suledo/40;
console.log(valorHoraTrabajo(400));

/*
6. Crear la función calculadorIMC() que reciba la altura en metros y el peso en
kilogramos y calcule el IMC de una persona. Luego, ejecutar la función
probando diferentes valores.
*/
const calculadorIMC = (altura, peso) => peso / (altura*100);
console.log(calculadorIMC(1.73,80));

/*
7. Crear una función que recibe un string en minúscula, lo convierta a mayúsculas
y lo retorne.
Investigá qué hace el método de strings .toUpperCase()
*/
const minusculaMayuscola = palabra => palabra.toUpperCase();
console.log(minusculaMayuscola('hola'));

/*
8. Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese
parámetro.
Pista: te servirá revisar qué hace la palabra reservada typeof.
*/
const tipoDato = dato => typeof dato;
console.log(tipoDato(11));

/*
9. Crear una función que le pasamos el radio de un círculo y nos devuelve la
circunferencia.
Pista: Investigá si el objeto Math tiene entre sus propiedades el número Pi.
*/
const circunferencia = radio => Math.PI * Math.pow(radio,2);
console.log(circunferencia(1));




