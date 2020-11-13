function saludar() {
    // Creamos una variable para guardar el elemento input

    let elInput;
    //rellenamos esa variable con document.getEl..byId con el id del elemento input (está en el HTML)
    elInput = document.getElementById("idInput");
    // IMPRIMIMOS Hola y el value del elemeno elInput

    //saludar sólo si se ha introducido un texto en la caja input != se usa para diferente.

    if (elInput.value != "") {
        alert("Hola " + elInput.value);
        //borrar el campo input
        elInput.value = "";
    }
}