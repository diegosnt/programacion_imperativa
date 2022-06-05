/*
11)
Hacer un algoritmo que muestre el promedio de varias
notas o de N notas ingresadas, se debe definir el valor de N
para conocer la cantidad de notas a ingresar.
*/

const prompt = require("prompt-sync")({ sigint: true });

const calcularPromedio = () => {
	let cantidad = parseInt(prompt('Ingresar cantidad de notas: ')); 
	let notas = [];
	let nota = 0;
        let total = 0;

	for (let i = 1; i <= cantidad; i++){
		nota = parseInt(prompt(`Ingresar la nota ${i}: `));
		notas.push(nota);
	}

        notas.forEach((n) =>{
		console.log(n)
		total +=  n; 	
	});
	
	console.log('Promedio: ' + total/cantidad);


}


calcularPromedio();
