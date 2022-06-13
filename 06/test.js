let arrgloA = [12, 34, 23, 64, 67];
let miArreglo = ["a", 1, "b", arrgloA];

miArreglo.push(23, "c");

console.log(miArreglo);
// console.log(miArreglo[3][0]);

miArreglo.pop();
console.log(miArreglo);

miArreglo.shift();
console.log(miArreglo);


let arrayFrase = [
    "No",
    "he",
    "fracasado,",
    "simplemente",
    "me",
    "he",
    "topado",
    "con",
    "diez",
    "mil",
    "soluciones",
    "equivocadas"
];

let fraseNueva = arrayFrase.join(" ");

console.log(fraseNueva);


let estudiantes = [{
        nombre: "Alvaro",
        promedio: 9,
        curso: "Android"
    },
    {
        nombre: "Daniel",
        promedio: 6,
        curso: "Full Stack"
    },
    {
        nombre: "Alexis",
        promedio: 3,
        curso: "iOS"
    }
];

let alumnoEgresado = estudiantes.pop();

console.log(alumnoEgresado);