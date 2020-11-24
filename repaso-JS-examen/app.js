/* let vTexto = "hola";
let vNumero = 3;
let vBoolean = true;

alert("Mensaje al usuario");

let retornoConfirm;
retornoConfirm = confirm("¿Estás seguro?");

if(retornoConfirm == true){
    alert("Has pulsado 'Aceptar'");
}else{
    alert("Has pulsado 'Cancelar'");
}

*/

let colorSolucion = prompt("Pon el color incognita");
alert("Estoy pensando en un color...");



let respuesta = prompt("¿Qué color estoy pensando? Tienes 2 intentos");

if (respuesta == colorSolucion) {
    alert("has acertado");
} else {
    respuesta = prompt("¿Qué color estoy pensando? Tienes 1 intento");
    if (respuesta == colorSolucion) {
        alert("has acertado");
    }else{
        alert("oooohhh");
    }



}




