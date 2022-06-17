// Crear un array llamado misMascotas 

// crear 3 objetos para 3 mascotas diferentes 

// Cada objeto deberá tener: 
// nombre
// raza
// edad 
// sonido
// y un método que nos retorne ese sonido 2 veces

// Agregarlos al array (misMascotas)
// Cuando esté listo, verificar por consola

// Deberemos crear una función que se llame aumentarEdad que aumente 
// la edad de cada animal en 1.

// Ahora debemos crear otra función, que se llame  aumentarEdad2, 
// que va a hacer un trabajo más fino:

// Si la mascota tiene menos de 6 años, debe aumentar su edad en 1
// Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2
// Si la mascota tiene más de 10 años,deberá sumarle la mitad de su edad

// Ahora crearemos una función que va a generar un identificador (ID) 
// en cada objeto, que será secuencial y que empezará en 1.

// Por último eliminaremos la propiedad ‘raza’ , 
// ya que para nosotros todos los animalitos son iguales 💘💞

// crea arrary
let miMascota = [];

const reproductor = () => this.sonido + " " + this.sonido;

const reproductor2 = function () {
    return this.sonido + " " + this.sonido;
}

// se crea 3 objetos
const mascota1 = {
    nombre: "Paco",
    raza: "Chiguagua",
    edad: 2,
    sonido: "guau",
    reprodicirSonido: reproductor
}

const mascota2 = {
    nombre: "Pepe",
    raza: "Chiguagua",
    edad: 7,
    sonido: "guau",
    reprodicirSonido: reproductor
}

const mascota3 = {
    nombre: "Michi",
    raza: "Chiguagua",
    edad: 12,
    sonido: "miau",
    reprodicirSonido: reproductor
}

//console.log(mascota3.reprodicirSonido())
//console.log(mascota1.reprodicirSonido())

miMascota.push(mascota1, mascota2, mascota3);

//console.log(misMascota);


// Deberemos crear una función que se llame aumentarEdad que aumente 
// la edad de cada animal en 1.

let aumentarEdad = miMascota => {
    for (let i = 0; 1 < miMascota.length; i++) {
        //miMascota[i].edad += 1;
        console.log(miMascota[i].edad);
        console.log("HOLA!!");
    }
}

aumentarEdad();
