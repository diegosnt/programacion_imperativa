/*
totalAPagar()
Declará una función llamada totalAPagar() que reciba como parámetros: vehiculo y
litrosConsumidos.
A continuación, definí y realizá los cálculos para obtener el total a pagar, teniendo en
cuenta las siguientes consideraciones:
● Si el vehículo es “coche”, el precio por litro es de $86.
● Si es “moto”, ha de ser $70.
● Si es “autobús”, ha de ser $55.
● Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.
● Si los litros consumidos son mayor a 25, se ha de añadir $25 al total a pagar.
*/

const totalAPagar = (vehiculo, litrosConsumidos) => {
    let total = 0;
    switch (vehiculo) {
        case 'coche':
            total = 86 * litrosConsumidos;
            break;
        case 'moto':
            total = 70 * litrosConsumidos;
            break;
        case 'autobús':
            total = 55 * litrosConsumidos;
            break;
        default:
            return 'vehículo no encontrado!!!'
    }
    return litrosConsumidos <= 25 ? total + 50 : total + 25;
}

console.log(totalAPagar('coche', 10))
console.log(totalAPagar('moto', 10))
console.log(totalAPagar('autobús', 10))
console.log(totalAPagar('triciclo', 10))