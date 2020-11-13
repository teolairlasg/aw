function saludar() {
    alert("Hola Clase");
}

function saludoPersonalizado(nombre) {
    let mensaje="Hola ";
    alert(mensaje+nombre);
}

function cambiarParrafo(contenido) {
    let elemento = document.getElementById("parrafo");
    elemento.innerHTML = contenido;
}
// Crear una funcion cambiarElemento que me permita cambiar el contenido del elemento con id (1er parámetro) por el segundo parámetro.

function cambiarElemento(idElemento, contElemento) {
    let elemento = document.getElementById(idElemento);
    elemento.innerHTML = contElemento;
}

cambiarParrafo("Hola Clase");
cambiarElemento("parrafo","Hola caracola");
cambiarElemento("parrafo2","Hola Mundo");
cambiarElemento("parrafo3","Adiós Mundo");

let elementoInput = document.getElementById("idInput");
elementoInput.value = "aaaola";

