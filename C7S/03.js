const prompt = require("prompt-sync")({ sigint: true });


/* ------------------------------------------------------- */
/* ---------------- Agregá caminos         --------------- */
/* ------------------------------------------------------- */

/*
Agregá caminos
Revisá el siguiente código y asegurate de entenderlo para poder avanzar con el
ejercicio.
*/

/*

let edad = 20 //(el número es a modo de ejemplo, podés cambiarlo o crear otras para tener varias pruebas)
if(edad < 18) {
    console.log("No puede pasar al bar.")
} else if (edad < 21){
    console.log("Puede pasar al bar, pero no puede tomar alcohol.")
} else {
    console.log("Puede pasar al bar y tomar alcohol.")
}


Sin repetirte, modificá tu código de forma tal que cumpla con estas consignas:
● Si la edad es negativa, que se muestre en la consola este mensaje: "Error, edad
inválida. Por favor ingrese un número válido."
Importante: no se deberá mostrar ningún otro mensaje.
● Si tiene 21 años, además de darle la bienvenida, felicitarlo por haber llegado a
la mayoría de edad.
● Si su edad es impar, decirle en cualquiera de los mensajes: "¿Sabías que tu
edad es impar?".
*/

const pasar = edad => {
    mensaje = '';
    if (edad < 0) {
        mensaje = "Error, edad inválida. Por favor ingrese un número válido.";
    } else if (edad < 18) {
        mensaje = "No puede pasar al bar.";
    } else if (edad < 21) {
        mensaje = "Puede pasar al bar, pero no puede tomar alcohol.";
    } else if (edad == 21) {
        mensaje = "Felicitaciones, Puede pasar al bar ya es mayor de edad!!!";
    } else {
        mensaje = "Puede pasar al bar y tomar alcohol.";
    }

    return edad%2 != 0? mensaje + " ¿Sabías que tu edad es impar?" : mensaje;
}

//let  n1 = parseInt(prompt("Ingresar edad: "));
console.log(pasar(21));

/* ------------------------------------------------------- */
/* ---------------- totalAPagar()          --------------- */
/* ------------------------------------------------------- */

/*
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

const totalAPagar = (vehiculo,litrosConsumidos) => {
    let total = 0;
    let extra = litrosConsumidos > 25? 25: 50;

    if (vehiculo === 'coche') {
        total =  litrosConsumidos * 86;
    } else if (vehiculo === 'moto'){
        total =  litrosConsumidos * 70;
    } else if (vehiculo === 'autobús'){
        total =  litrosConsumidos * 55;
    }

    return total + extra;
}

//console.log(totalAPagar('moto',1));

/* ------------------------------------------------------- */
/* ---------------- Local de sándwiches()  --------------- */
/* ------------------------------------------------------- */

/*
Necesitamos armar el sistema para un local de venta de sándwiches. Los clientes
eligen el sándwich base que tiene un precio y, por cada selección siguiente, se le suma
el valor de su selección al precio. Por ejemplo, partiendo de un sándwich base
vegetariano con un precio x, después se selecciona pan negro con un precio y, por lo
que el total a pagar sería x+y, y así sucesivamente con el resto de los ingredientes.
Como es un local que ya tenía un sistema previo, ellos ya tienen toda la interfaz
donde el usuario elige cada ingrediente, lo que nos facilita el trabajo, ya que nosotros
recibiremos los datos de la siguiente manera.

Nos llega un string indicando el tipo de sándwich base. Estos tienen un valor base
diferente por cada selección:

● Pollo = $150 (“pollo”)
● Carne = $200 (“carne”)
● Vegetariano (verduras asadas) = $100 (“veggie”)

Luego, el sistema pregunta al cliente qué tipo de pan quiere. Tienen para elegir entre
otras tres opciones, por lo que recibiremos también otro string con el tipo de pan
deseado:
● Blanco c/orégano y parmesano = $50 (“blanco”)
● Negro c/avena = $60 (“negro”)
● Sin gluten = $75 (“s/gluten”)

Para finalizar, el sistema avanza preguntando al cliente si quiere los siguientes adicionales:
● Queso = $20
● Tomate = $15
● Lechuga = $10
● Cebolla = $15
● Mayonesa = $5
● Mostaza = $5

Cada uno de estos adicionales están representados por booleanos —es decir, true o
false—, dependiendo de si aceptan o no cada uno de los adicionales —nos llegan un
total de seis valores booleanos, uno por cada adicional—.
Nuestro trabajo es crear una función que reciba estos ocho parámetros —un string
para el sándwich base, uno para el pan y los seis booleanos de los adicionales—. La
función deberá consultar primero qué tipo de sándwich base se seleccionó, luego el
tipo de pan, y por último deberá verificar qué adicionales se seleccionaron.
Finalmente, deberá retornar el valor numérico del total a pagar del cliente.
*/

const sandwiches= (tipo, pan, adicionales) => {
    let total = 0;

    // tipo de sándwich
    if(tipo === 'pollo'){
        total += 150;
    } else if (tipo === 'carne') {
        total += 200;
    } else {
        total += 100;
    }

    // tipo de pan
    if(pan === 'blanco'){
        total += 150;
    } else if (pan === 'negro') {
        total += 200;
    } else {
        total += 75;
    }

    // adicionales
    total+= adicionales[0]?20:0;    //Queso  = $20
    total+= adicionales[1]?15:0;    //Tomate = $15
    total+= adicionales[2]?10:0;    //Lechuga = $10
    total+= adicionales[3]?15:0;    //Cebolla = $15
    total+= adicionales[4]?5:0;     //Mayonesa = $5
    total+= adicionales[5]?5:0;     //Mostaza = $5

    return total
}

//console.log(sandwiches('veggie', 'blanco', [1,1,0,1,0,0]));

/* ------------------------------------------------------- */
/* ---------------- ¿Cuál es el número secreto? ---------- */
/* ------------------------------------------------------- */

/*
¿Cuál es el número secreto?
Creá una función que reciba un parámetro numérico y verifique si el mismo es el
número secreto. El número secreto deberá ser seleccionado de manera random de
entre 1 y 10 —investigá qué hace la función Math.random()—. En caso de ser correcto,
retorna un mensaje felicitando al usuario y, en caso de que no acierte, retorna un
mensaje de aliento junto con el número ingresado y el secreto.
*/

const numeroSecreto = numero => {
    numeroRandom = Math.floor((Math.random() * 10 ) + 1);

    if (numero === numeroRandom){
        mensaje = `Felicitaciones numero correcto!!! ${numeroRandom} = ${numero}`;
    } else {
        mensaje = `Sigue intentando!!! ${numeroRandom} != ${numero}`;
    }

    return mensaje;
}

console.log(numeroSecreto(3));

/* ------------------------------------------------------- */
/* ---------------- abrirParacaidas()           ---------- */
/* ------------------------------------------------------- */

/*
Crea una función llamada abrirParacaidas() que recibe dos parámetros: velocidad y
altura. La función deberá decirnos si el paracaídas debe abrirse teniendo en cuenta lo
siguiente:
● La velocidad debe ser menor a 1000 km/h.
● La altura debe ser mayor o igual a 2000 m y menor a 3000 m.
*/

const abrirParacaidas = (velocidad, altura) => {
    let mensaje = 'No abrir paracaidas!!!'
    if( (velocidad < 1000) && (altura >= 2000 && altura < 3000 )){
        mensaje = 'Abrir paracaidas!!!'
    }
    return mensaje;
}

console.log(abrirParacaidas(999,2000));

/* ------------------------------------------------------- */
/* ---------------- Traductor condicional()     ---------- */
/* ------------------------------------------------------- */

/*
Usando la estructura switch, crea un programa en el que si un usuario ingresa "casa",
"perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma
inglés.
En caso de que la palabra sea distinta a la esperada, mostrarle un mensaje que le
informe que la palabra ingresada es incorrecta.
*/

const traductorCondicional  = palabra => {
        let traduccion = '';
    switch(palabra) {
        case 'casa':
            traduccion = 'home';
            break;
        case 'perro':
            traduccion = 'dog';
            break;
        case 'pelota':
            traduccion = 'bool';
            break;
        case 'árbol':
            traduccion = 'tree';
            break;
        case 'genio':
            traduccion = 'genius';
            break;
        default:
            traduccion = 'la palabra ingresada es incorrecta';
    }
    return traduccion;
}

console.log(traductorCondicional('perro'));

/* ------------------------------------------------------- */
/* ---------------- Valoración de películas     ---------- */
/* ------------------------------------------------------- */

/*
Usando la estructura switch, pedirle al usuario que valore la película que acaba de ver
según la siguiente escala:
● Muy mala.
● Mala.
● Mediocre.
● Buena.
● Muy buena.
Acompaña cada valoración con un mensaje que indique si te lamentás o te alegrás
por su valoración.
Por ejemplo: "Calificaste la película como Muy Mala. Lo lamentamos mucho.".
*/

const calificarPelicula = (califecacion) => {
    let mensaje = '';
    switch(califecacion) {
        case 'Muy mala':
            mensaje = 'Calificaste la pelicula como muy mala, lo lamentamos mucho';
            break;
        case 'Mala':
            mensaje = 'Calificaste la pelicula como mala, lo lamentamos mucho';
            break;
        case 'Mediocre':
            mensaje = 'Calificaste la pelicula como mediocre, lo lamentamos mucho';
            break;
        case 'Buena':
            mensaje = 'Calificaste la pelicula como buena, lo lamentamos mucho';
            break;
        case 'Muy buena':
            mensaje = 'Calificaste la pelicula como muy buena, nos alegra mucho';
            break;
        default:
            mensaje = 'Ingresaste un valor incorrecto!!!';
    }
    return mensaje;
}

console.log(calificarPelicula('ee'));
