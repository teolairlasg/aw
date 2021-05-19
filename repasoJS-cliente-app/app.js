function marcarTarea(evento) {
    let casilla = evento.target;
    let papeleaTarea = casilla.previousElementSibling;
    let spanTarea = papeleaTarea.previousElementSibling;
    if (casilla.checked == true) {
        //Mostrar la papelera de al lado.
        papeleaTarea.style.display = 'inline';
        papeleaTarea.addEventListener('click', borrarTarea);
        //Tachar el texto de al lado.
        spanTarea.style.textDecoration = 'line-through';
    } else {
        papeleaTarea.style.display = 'none';
        spanTarea.style.textDecoration = 'none';
        //quitar el evento cuando ocultamos la papelera
        papeleaTarea.removeEventListener('click', borrarTarea);
    }
}

function borrarTarea(evento) {
    let papelera = evento.target;
    let listaTareas = document.getElementById('seccionTareas');
    listaTareas.removeChild(papelera.parentNode);
}

function agregarTarea() {
    // crear un div para la nueva tarea con clase "tarea"
    let divTarea = document.createElement('div');
    divTarea.className = 'tarea';
    // añadir el span al div
    divTarea.appendChild(crearSpanTarea());
    //agregarlos también al divTarea
    divTarea.appendChild(crearPapeleraTarea());
    divTarea.appendChild(crearCasillaTarea());
    // añadir el div al div llamado #seccionTareas
    let seccionTareas = document.getElementById('seccionTareas');
    seccionTareas.appendChild(divTarea);
    document.getElementById('nombreTarea').value = '';
}

function crearSpanTarea() {
    // coger el texto de la caja
    let texto = document.getElementById('nombreTarea').value;
    // crear un span con el texto de la caja que hemos cogido antes
    let spanNombreTarea = document.createElement('span');
    spanNombreTarea.textContent = texto;
    spanNombreTarea.draggable = true;
    spanNombreTarea.addEventListener('dragstart', arrastrarTarea);
    spanNombreTarea.addEventListener('dragend', ocultarCuboBasura);
    return spanNombreTarea;
}

function quitarOpacidad(event) {
    document.querySelector('#cuboBasura').style.opacity = '1';
    event.preventDefault();
}

function devolverOpacidad(event) {
    document.querySelector('#cuboBasura').style.opacity = '0.5';
}

function arrastrarTarea(evento) {
    document.querySelector('#cuboBasura').style.opacity = '0.5';
    let listaTareas = document.querySelector('#seccionTareas');
    let indiceTarea = Array.from(listaTareas.childNodes).indexOf(evento.target.parentNode);
    evento.dataTransfer.setData('text/html', indiceTarea);
}

function ocultarCuboBasura() {
    document.getElementById('cuboBasura').style.opacity = '0';
}

function borrarTareaArrastrada(evento) {
    let indiceTarea = evento.dataTransfer.getData('text/html');
    let listaTareas = document.getElementById('seccionTareas');
    listaTareas.removeChild(listaTareas.childNodes[indiceTarea]);
}

function crearPapeleraTarea() {
    //crear el icono de la papelera con el listener
    let papelera = document.createElement('img');
    papelera.src = './iconos/papelera.svg';
    papelera.alt = 'Icono Borrar Tarea';
    papelera.title = 'Pulsa aquí para borrar tarea';
    return papelera;
}

function crearCasillaTarea() {
    //crear el checkbox ('click',marcarTarea)
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    //agregar los listeners a la papelera y el checkbox.
    checkbox.addEventListener('click', marcarTarea);
    return checkbox;
}

function comprobarTecla(evento) {
    if (evento.key == 'Enter') {
        agregarTarea();
    }
}