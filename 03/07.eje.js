/*
<Right>Escribí un programa que itere sobre el arreglo nombres e
imprima cada uno en la consola: const nombres = ["Pedro",
"Pablo", "Maria", "Juan", "Diana"];
*/

const imprimeArreglo1 = (miArreglo) =>{
	for (let i = 0; i <= miArreglo.length; i++){
		console.log(miArreglo[i]);
	}
}

const imprimeArreglo2 = (miArreglo) =>{
	miArreglo.forEach(function(elemento){
		console.log(elemento);
	});
}

const imprimeArreglo3 = (miArreglo) =>{
	miArreglo.forEach((elemento) =>{
		console.log(elemento);
	});
}



nombres = ["Pedro", "Pablo", "Maria", "Juan", "Diana"];

imprimeArreglo3(nombres);
