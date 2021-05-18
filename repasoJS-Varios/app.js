let nombreImgs = ['logo1.png', 'logo2.png', 'logo3.png', 'logo4.png', 'logo5.png', 'logo6.png', 'logo7.png', 'logo8.png', 'logo9.png', 'logo11.png', 'logo11.png', 'logo12.png'];

//Creamos una funcion agregarImagen(nombreArchivo) que acepte un parámetro nombre de archivo
//La función debe crear un nuevo elemento img con la propiedad 
//src igual a la cadena ./imgs/<nombreArchivo>
//Después debe incluir la imagen dentro de el div llamado "galeria"

function agregarImagen(nombreArchivo) {
    let imgNueva = document.createElement('img');
    imgNueva.src = './imgs/' + nombreArchivo;
    imgNueva.addEventListener("dblclick", borrarDeGaleria);
    imgNueva.addEventListener("click", pintarFondoAmarillo);
    // cuando pulse click sobre la imagen
    // su fondo se pintará de amarillo

    let galeria = document.getElementById('galeria');
    galeria.appendChild(imgNueva);
}

function borrarDeGaleria(evento) {
    let galeria = document.getElementById('galeria');
    galeria.removeChild(evento.target);
}

function pintarFondoAmarillo(e) {
    let elemento = e.target;
    elemento.style.backgroundColor = 'yellow';
}


//Cuando hayáis creado la función, rellenad la función siguiente:
// con un for of que recorra nombreImgs y que use la funcion 
//agregarImagen(nomreArchivo)
function agregarImagenes() {
    for (const img of nombreImgs) {
        agregarImagen(img);
    }
}

function modificarImagenes() {
    let listaImagenes = document.getElementsByTagName('img');
    for (const imagen of listaImagenes) {
        imagen.style.backgroundColor = 'green';
    }
}

function ocultarImagenes() {
    let listaImagenes = document.getElementsByTagName('img');
    for (const imagen of listaImagenes) {
        imagen.style.visibility = 'hidden';
    }
}

function mostrarImagenes() {
    let listaImagenes = document.getElementsByTagName('img');
    for (const imagen of listaImagenes) {
        imagen.style.visibility = 'visible';
    }
}

function intercambiarFondo() {
    let listaImagenes = document.getElementsByTagName('img');
    for (const imagen of listaImagenes) {
        if (imagen.style.backgroundColor == 'yellow') {
            imagen.style.backgroundColor = '';
        } else {
            imagen.style.backgroundColor = 'yellow';
        }
    }
}