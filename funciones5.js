/*
abrirParacaidas()
Crea una función llamada abrirParacaidas() que recibe dos parámetros: velocidad y
altura. La función deberá decirnos si el paracaídas debe abrirse teniendo en cuenta lo
siguiente:
● La velocidad debe ser menor a 1000 km/h.
● La altura debe ser mayor o igual a 2000 m y menor a 3000 m.
*/

const abrirParacaidas = (velocidad, altura) => (velocidad < 1000 && (altura >= 2000 && altura < 3000) ) ? 'ABRI ABRI EL PARACAIDAS!!!': 'esperar...';

console.log(abrirParacaidas(1900, 2000));
