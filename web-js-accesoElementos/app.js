let color = prompt("¿Qué color quieres para el párrafo?");
color = color.toLowerCase();
let elementoParrafo = document.getElementById("parrafo");
console.log(elementoParrafo);
elementoParrafo.innerHTML="Hola clase";

if (color == "rojo" || color == "verde" ) {
    elementoParrafo.className=color;
}else{
    alert("Sólo puede ser rojo o verde")
}

    