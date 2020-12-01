//capturar la lista del html
let ls = document.getElementById("lista");
//inicializar la variable de iteración
let i = 0;
//empezar el bucle. desde 0 hasta < length
while (i < ls.children.length) {
    //acceder al contendio del elemento children[]
    let hijo = ls.children[i];
    //Añadirle un punto (concatenamos con +);
    hijo.innerHTML += ".";//equivalente a hijo.innerHTML = hijo.innerHTML+"."
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

//iteramos por array artistas con un for

//para cada valor de i 
// creamos un tr

// creamos un td y le ponemos de contenido i+1

// creamos otro td y le ponemos de contenido el artista que toque

// añadimos los dos td al elemento tr que hemos creado.

// añadimos el elemento tr a la tabla "tabla".

//final del bucle








