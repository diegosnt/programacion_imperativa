
let curso = {
    cantidadDeAlumnos: 32,
    docenter: ["Nacho", "Javier"],
    horario: "de 19 a 21 hs.",
    notificaciones : function(){
        return "El horario de la cuesada es " + this.horario;
    }
}

console.log(curso);
//console.log("La cantidad de alumnos de este curso es de " + curso.cantidadDeAlumnos);

console.log(curso.notificaciones());
