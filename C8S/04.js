/* ------------------------------------------------------- */
/* ---------------- Bucles y repeticiones       ---------- */
/* ------------------------------------------------------- */

/*
1) Crear una función que pida un valor por parámetro y muestre los 10
números siguientes.
*/
const numerosSiguientes = numero => {
    for(let i = numero+1; i <= (numero+10); i++){
        console.log(i);
    }
}

//numerosSiguientes(13);

/*
2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.
*/

const imnprimir5a20 = () => {
    for(let i = 5; i <= 20; i+=3){
        console.log(i);
    }
}

//imnprimir5a20();

/*
3) Escribir un programa que muestre la sumatoria de todos los números
entre el 0 y el 100
*/

const sumatoria0a100 = () => {
    let total = 0;
    for(let i = 0; i<= 100; i++) {
        total += i;
    }
    return total;
}
console.log(sumatoria0a100());

/*
4) Dado un número entero positivo, mostrar su factorial. El factorial de
un número se obtiene multiplicando todos los números enteros
positivos que hay entre el 1 y ese número.
*/
const factorial = numero => {
    let total = 1;
    for(let i = 1; i <= numero; i++){
        total *= i;
    }
    return total;
}

console.log(factorial(4));

/*
5) Crear una función que muestre todos los números de la secuencia de
fibonacci hasta el valor ingresado por parámetro.
*/

const fibo = numero => {
    let n1 = 0;
    let n2 = 1;
    let n3 = 0;
    let n4 = 1;
    console.log(n1,n2);
    for (i = 3;i <= numero;i++){
        n3 = n1 + n2;
        console.log(n3);
        n4 = n4 + n3;
        n1 = n2;
        n2 = n3;
    }
}
console.log('-------------');
console.log(fibo(5));