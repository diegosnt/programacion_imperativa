// Debemos crear una función llamada dominio que recibirá un string 
//como "digitalhouse.com.ar" y su función será retornar: "http://www.digitalhouse.com.ar".


const dominio = url => "http://www." + url;

/*
function dominio(url){
    return "http://www." + url;
}
*/

console.log(dominio("digitalhouse.com.ar"));