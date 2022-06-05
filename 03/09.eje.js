/*
 9) Escribí una función llamada elemento que recibe un arreglo
como parámetro. La función debe devolver el valor que se
encuentra en la tercera posición. Si el arreglo no tiene al menos
3 elementos deberá retornar -1.
 */

const elemento = arreglo =>{
	if(arreglo.length >= 3){
		console.log(arreglo[2]);
	}
	else{
		console.log(-1);
	}
}

let test = ['uno','dos','tres'];

//console.log(test.length);

elemento(test);
	


