// CALCULAR EL TOTAL GASTADO DEL MES

let gastos3 = [
    // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
    // EL MES ES FEBRERO QUE TIENE 28 DIAS
    [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
    [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],// semana 3
    [800, 1250, 1430, 2100, 1980, 1270, 950],  // semana 4
    ];
    // CALCULAR EL GASTO TOTAL DE CADA SEMANA Y MOSTRARLO EN CONSOLA
  // CREAR UN ARRAY CON EL TOTAL DE CADA SEMANA
  


  const totalGastos = (array) => {
  let arraySemana = [];
  let acc = 0;
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            acc += array[i][j]
        }
        arraySemana.push(acc);
        acc = 0;
    }
    return arraySemana;
  }

  console