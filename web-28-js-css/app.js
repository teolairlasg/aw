let parrafo = document.getElementById("parrafo1");
function ocultarParrafo() {
    parrafo.classList.add("oculto");
}

function mostrarParrafo() {
    parrafo.classList.remove("oculto");
}

function cambiaVerde() {
    parrafo.style.color="green";
}