function anyadirTarea() {
    //tomo el valor del input
    let eTarea = document.getElementById("idTarea");
    // compruebo si tiene algo de texto
    if (eTarea.value != "") {
        //si tiene texto, añado la tarea en la lista
        anyadirElemento(eTarea.value);
        //despues de añadir borro el elento input
        eTarea.value = "";
    }
    //si no tiene texto, no hago nada
}
//funcion añadir elemento a la lista. 
//cogera un parámetro y lo añadirá a la lista listaTareas
function anyadirElemento(textoTarea) {
    //cojo el elemento de la lista
    let listaTareas = document.getElementById("listaTareas");
    //le añado un elemento de lista con el texto
    // del parámetro textoTarea
    listaTareas.innerHTML += "<li>" + textoTarea + "</li>";
}