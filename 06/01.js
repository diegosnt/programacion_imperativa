
const alicia = [10, 80, 75];
const bob = [90, 20, 25];

function encontrarGanador(a, b) {
//su solución aquí
    let puntosA = 0;
    let puntosB = 0;
    for (let i = 0; i < 3; i++){
        if (a[i] > b[i]) {
            puntosA++;}
        else {
            puntosB++;
        }    
    }
    
    if(puntosA > puntosB) {
        return "primer";
    } else{
        return "segundo";
    }

}

console.log("El ganador es: " + encontrarGanador(alicia, bob) + " participante");


// let Concurso = {
//    eta: 
// }