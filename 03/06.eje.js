/*
 6) Escribí un programa que imprima los números pares del 0 al 100.
 */

const soloImpares = () => {
	for(let i = 1; i <= 100; i++){
		if (i%2 == 0) console.log(i);
	}
}

soloImpares();
