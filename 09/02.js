const arrayCuentas = [{
        titular: "Arlene Barr",
        estaHabilitada: false,
        saldo: "$3,253.40",
        edadTitular: 33,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Roslyn Torres",
        estaHabilitada: false,
        saldo: "$3,229.45",
        edadTitular: 27,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Cleo Lopez",
        estaHabilitada: true,
        saldo: "$1,360.19",
        edadTitular: 34,
        tipoCuenta: "corriente"
    },
    {
        titular: "Daniel Malone",
        estaHabilitada: false,
        saldo: "$3,627.12",
        edadTitular: 30,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Ethel Leon",
        estaHabilitada: true,
        saldo: "$1,616.52",
        edadTitular: 34,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Harding Mitchell",
        estaHabilitada: true,
        saldo: "$1,408.68",
        edadTitular: 25,
        tipoCuenta: "corriente"
    }
]


//console.log(arrayCuentas);
// a. Obtener un nuevo array de cuentas cuyas edades sean menores a 30.

let arrayMenores30 = [];
let arrayMayorIgual30 = [];
let arrayIgual30 = [];

const obtenerMenor30 = arreglo => {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i].edadTitular < 30) {
            arrayMenores30.push(arreglo[i]);
        } else  {
            arrayMayorIgual30.push(arreglo[i]);
            if (arreglo[i].edadTitular == 30) {
                arrayIgual30.push(arreglo[i])
            }
        }
    }
}


  /*,
  {
    nombre: "Juan",
    apellido: "Vacunao",
    temperatura: 38,
    estaVacunado: true,
  },
  {
    nombre: "Ricardo",
    apellido: "Novacunao",
    temperatura: 38,
    estaVacunado: false,
  },
  {
    nombre: "Ricardo",
    apellido: "Nopasanada",
    temperatura: 40,
    estaVacunado: true,
  },*/

obtenerMenor30(arrayCuentas)

//console.log(arrayMenores30)

//console.log(arrayMayorIgual30)
//console.log(arrayIgual30)



const obtenerMenorEdad  = arreglo => {
    let edadMenor = arreglo[0];
    
    for (let i = 0; i < arreglo.length; i++) {
            if (arreglo[i].edadTitular < edadMenor.edadTitular){
                edadMenor = arreglo[i];
            }
    }
    return edadMenor;
}

// console.log(obtenerMenorEdad(arrayCuentas));


// Obtener un nuevo array por cada tipo de cuenta.



const obtenerTiposCuenta = arrayCuentas => {
    let cuentasSueldo = []
    let cuentasCorriente = []
    for (let i = 0; i < arrayCuentas.length; i++) {
        if (arrayCuentas[i].tipoCuenta === "sueldo") {
            cuentasSueldo.push(arrayCuentas[i])
        } else if (arrayCuentas[i].tipoCuenta === "corriente") {
            cuentasCorriente.push(arrayCuentas[i])
        }
    }
    return [cuentasSueldo,cuentasCorriente]
}
console.log(obtenerMenor30(obtenerTipos 