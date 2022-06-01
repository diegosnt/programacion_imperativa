/*
Valoración de películas
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
En caso de que ingresara un valor distinto, mostrarle el mensaje: "Ingresaste un valor
inválido".
Cuando el usuario haya valorado la película, agradecerle su visita.
*/

const prompt = require("prompt-sync")({ sigint: true });

const valorarPelicula = () => {

    console.log('Valore la película que acaba de ver según la siguiente escala:');
    console.log('  1. Muy mala.');
    console.log('  2. Mala.');
    console.log('  3. Mediocre.');
    console.log('  4. Buena.');
    console.log('  5. Muy buena.');
    console.log('');

    let valoracion = prompt("Ingresar una valoración: ");

    console.log(' Gracias por su visita');

    switch (valoracion) {
        case '1':
            console.log('Calificaste la película como Muy Mala. Lo lamentamos mucho.');
            break;
        case '2':
            console.log('Calificaste la película como Mala. Lo lamentamos mucho.');
            break;
        case '3':
            console.log('Calificaste la película como Mediocre. Lo lamentamos mucho.');
            break;
        case 'Buena':
            console.log('Calificaste la película como Buena. Nos alegra mucho.');
            break;
        case 'Muy buena':
            console.log('Calificaste la película como Muy Buena. Nos alegra mucho.');
            break;
        default:
            console.log('Ingresaste un valor inválido');
    }


}

valorarPelicula()
