//capturar la lista del html
let ls = document.getElementById("lista");
//inicializar la variable de iteración
let i = 0;
//empezar el bucle. desde 0 hasta < length
while (i < ls.children.length) {
    //acceder al contendio del elemento children[]
    let hijo = ls.children[i];
    //Añadirle un punto (concatenamos con +);
    hijo.innerHTML += ".";
    //equivalente a hijo.innerHTML = hijo.innerHTML+"."
    i++; //incrementamos la variable
    //Finalizamos el bucle
}

for (let i = 0; i < ls.children.length; i++) {
    ls.children[i].innerHTML += ".";
}

let p = document.getElementById("parrafo");
//p.style.color = "red";

//Utilizad un bucle for como el de arriba
//con un if (o dos ifs) dentro para pintar de rojo
//los elementos "Segundo" y "Cuarto" de nuestra lista
for (let i = 0; i < ls.children.length; i++) {
    if (i == 1 || i==3) {
        ls.children[i].style.color="red";        
    }
}

let artistas = ["Amaral", 
                "Estopa", 
                "El Canto del Loco",
                "C Tangana",
                "Rosalía",
                "Vetusta Morla",
                "Tatchenko",
                "Pecker",
                "Mago de Oz",
                "Héroes del Silencio",
                "La Polla Records"];


//Ejercicio para el miércoles 2 de diciembre
//Rellenad la tabla "tabla" del HTML siguiendo el siguiente
//patrón:
// +---+-------------------+
// | 1 | Amaral            |
// |---|-------------------|
// | 2 | Estopa            |
// |---|-------------------|
// | 3 | El canto del loco |
//  ......................
let tabla = document.getElementById("tabla");
//iteramos por array artistas con un for
for (let i = 0; i < artistas.length; i++) {
/* // esto es un chapucilla, pero funciona
let fila="<tr><td>"+(i+1)+"</td><td>"+artistas[i]+"</td></tr>";
tabla.innerHTML+=fila;
*/
// creamos un tr
let fila = document.createElement("tr");
// creamos un td para la celda del número
let celda1 = document.createElement("td");
// creamos un td para la celda del artista
let celda2 = document.createElement("td");
//rellenamos la celda del número con el índice
celda1.innerHTML = i+1;
//rellenamos la celda del artista con el artista que toca
celda2.innerHTML = artistas[i];
//añadimos a la fila la celda del número con appendChild
fila.appendChild(celda1);
//añadimos a la fila la celda del artista con appendChild
fila.appendChild(celda2);
//añadimos la fila a la tabla.
tabla.appendChild(fila);
}
//final del bucle








