function agregarHora() {
    let fecha = new Date();
    agregarElemento(fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
}

function agregarFecha() {
    let fecha = new Date();
    agregarElemento(fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getFullYear());

}

function agregarNumero() {
    let numero = Math.floor(Math.random() * 100);
    agregarElemento(numero);
}

function agregarParrafo() {
    let par = window.prompt();
    if (par == undefined) {
        alert('Cancelado por el usuario');
    } else if (par == '') {
        alert('No has escrito nada');
    } else {
        agregarElemento(par);
    }
}

function agregarElemento(texto) {
    // creamos un elemento de tipo <li>
    let elemento = document.createElement('li');
    elemento.innerHTML = texto;
    //<li>hola mundo</li>
    let lista = document.getElementById('lista1');
    lista.appendChild(elemento);
}

function borraTodo() {
    let lista = document.getElementById('lista1');
    while (lista.hasChildNodes()) {
        lista.removeChild(lista.firstChild);
    }
}