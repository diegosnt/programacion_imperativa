// Crear un array llamado misMascotas 
let misMascotas = []
// crear 3 objetos para 3 mascotas diferentes 

// Cada objeto deberá tener: 
// nombre
// raza
// edad 
// sonido
// y un método que nos retorne ese sonido 2 veces
let reproductor = function () {
    return this.sonido + " " + this.sonido
}

const masc1 = {
    nombre: "Paco",
    raza: "Chiguagua",
    edad: 5,
    reproductorSonido: reproductor,
    sonido: "Guau",
}

const masc2 = {
    nombre: "Pepe",
    raza: "Labrador",
    edad: 7,
    sonido: "Guau",
    reproductoSonido: reproductor
}
const masc3 = {
    nombre: "Michi",
    raza: "Persa",
    edad: 12,
    sonido: "Miau",
    reproductoSonido: reproductor
}


// Agregarlos al array (misMascotas)
misMascotas.push(masc1, masc2, masc3)

// Cuando esté listo, verificar por consola
// console.log(misMascotas);

// Deberemos crear una función que se llame aumentarEdad que aumente 
// la edad de cada animal en 1.

const aumentarEdad = listaAnimales => {
    for (let i = 0; i < listaAnimales.length; i++) {
        listaAnimales[i].edad += 1
    }
}
//console.log(misMascotas);
//aumentarEdad(misMascotas)
//console.log("Aca modificado ", misMascotas);

// Ahora debemos crear otra función, que se llame  aumentarEdad2, 
// que va a hacer un trabajo más fino:

// Si la mascota tiene menos de 6 años, debe aumentar su edad en 1
// Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2
// Si la mascota tiene más de 10 años,deberá sumarle la mitad de su edad

const aumentarEdad2 = listaAnimales => {
    for (let i = 0; i < listaAnimales.length; i++) {
        if (listaAnimales[i].edad < 6) {
            listaAnimales[i].edad += 1
        } else if (listaAnimales[i].edad >= 6 && listaAnimales[i].edad <= 10) {
            listaAnimales[i].edad += 2
        } else {
            listaAnimales[i].edad += listaAnimales[i].edad / 2
        }

    }
}

// Ahora crearemos una función que va a generar un identificador (ID) 
// en cada objeto, que será secuencial y que empezará en 1.
const generaIdentificador = listaAnimales => {
    for (let i = 0; i < listaAnimales.length; i++) {
        listaAnimales[i].ID = i + 1
        delete listaAnimales[i].raza
    }
}
generaIdentificador(misMascotas)
console.log(misMascotas[0]['nombre']);
// Por último eliminaremos la propiedad ‘raza’ , 
// ya que para nosotros todos los animalitos son iguales