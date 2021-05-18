let ancho = 50;
let alto = 50;

document.getElementById("caja").style.width = ancho + "vw";
document.getElementById("caja").style.height = alto + "vh";

/*
Crear una función que aumente el tamaño de la caja en 
1vh y en 1wh cada vez que se pulse la tecla +
Usa onkeypress aplicado al body, busca el ejercicio
que hicimos del canvas y la bola del mundo.
*/

function incrementarAnchura() {
    ancho++;
    document.getElementById("caja").style.width = ancho + "vw";
}

function incrementarAltura() {
    alto++;
    document.getElementById("caja").style.height = ancho + "vh";
}



/*
Crear una función que disminuya el tamaño de la caja en 
1vh y en 1wh cada vez que se pulse la tecla -
Usa onkeypress aplicado al body, busca el ejercicio
que hicimos del canvas y la bola del mundo.
*/