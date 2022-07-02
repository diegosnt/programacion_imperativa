const ordenAsc = (numeros) => {
  for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length; j++) {
      if (numeros[j] > numeros[j + 1]) {
        let temp = numeros[j];
        numeros[j] = numeros[j + 1];
        numeros[j + 1] = temp;
      }
    }
  }
  return numeros;
};

const ordenDes = (numeros) => {
  for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length; j++) {
      if (numeros[j] < numeros[j + 1]) {
        let temp = numeros[j];
        numeros[j] = numeros[j + 1];
        numeros[j + 1] = temp;
      }
    }
  }
  return numeros;
};

const edades = [33, 27, 34, 30, 34, 25];

//console.log(ordenAsc(edades));

//console.log(ordenDes(edades));

const arrayCuentas = [
  {
    titular: "Arlene Barr",
    estaHabilitada: false,
    saldo: 3253.4,
    edadTitular: 33,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Roslyn Torres",
    estaHabilitada: false,
    saldo: 3229.45,
    edadTitular: 27,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Cleo Lopez",
    estaHabilitada: true,
    saldo: 1360.19,
    edadTitular: 34,
    tipoCuenta: "corriente",
  },
  {
    titular: "Daniel Malone",
    estaHabilitada: false,
    saldo: 3627.12,
    edadTitular: 30,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Ethel Leon",
    estaHabilitada: true,
    saldo: 1616.52,
    edadTitular: 34,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Harding Mitchell",
    estaHabilitada: true,
    saldo: 1408.68,
    edadTitular: 25,
    tipoCuenta: "corriente",
  },
];

const ordenAscSaldo = (numeros) => {
  for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length; j++) {
      if ((numeros[j].saldo) > (numeros[j + 1].saldo)) {
        let temp = numeros[j];
        numeros[j] = numeros[j + 1];
        numeros[j + 1] = temp;
        console.log(numeros[j].saldo);
      }
    }
  }
  return numeros;
};


let test = ordenAscSaldo(arrayCuentas);


console.log(test);