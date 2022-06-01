let edad = 23 //(el número es a modo de ejemplo, podés cambiarlo o crear otras para tener varias pruebas)

let mensajeEsPar = edad % 2 != 0 ? " ¿Sabías que tu edad es impar?" : "";

if (edad < 0) {
    console.log("Error, edad inválida. Por favor ingrese un número válido." + mensajeEsPar);
} else if (edad < 18) {
    console.log("No puede pasar al bar." + mensajeEsPar);
} else if (edad < 21) {
    console.log("Puede pasar al bar, pero no puede tomar alcohol." + mensajeEsPar);
} else if (edad == 21) {
    console.log("Puede pasar al bar, tomar alcohol y felicidades por haber llegado a la mayoría de edad." + mensajeEsPar);
} else {
    console.log("Puede pasar al bar y tomar alcohol." + mensajeEsPar);
}