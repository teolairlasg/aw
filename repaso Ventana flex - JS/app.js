function ocultarVentana() {
    //Capturo el elemento del HTML
    let vent = document.getElementById("ventana");
    //Le cambio el CSS a través de su propiedad style.
    vent.style.display = "none";
    let velo = document.getElementById("velo");
    velo.style.display = "none";
}

function mostrarVentana() {
    let vent = document.getElementById("ventana");
    vent.style.display = "flex";
    let velo = document.getElementById("velo");
    velo.style.display = "block";
}

/* Crear una función que pinte de verde el fondo del body */


/* Añadir al HTML un botón que utilice la función anterior */


/* Crear una función que devuelva a blanco el fondo del body */


/* Añadid al body que cuando se haga doble click sobre cualquier
parte del body, se utilice la función anterior para devolver el color 
 blanco 
*/