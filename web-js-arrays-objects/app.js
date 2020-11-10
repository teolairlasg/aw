/* El array alumno, tiene:
 en la primera posición el nombre
 en la segunda posición el apellido
 en la tercera posición la edad.
 */
let alumnoArray = ["Pepito","Perez", 54];

/* Las posiciones en un array se empiezan por 0*/


/*En la consola poner el nombre*/
console.log(alumnoArray[0]);
/*En la consola de error poner el apellido*/
console.error(alumnoArray[1]);
/*En un alert, ponéis la edad*/
alert(alumnoArray[2]);

console.log(alumnoArray.length)

let alumnoObjeto = { 
    "nombre": "Pepito",
    "apellido": "Perez",
    "edad": 54
};

/*En la consola poner el nombre*/
console.log(alumnoObjeto.nombre);
/*En la consola de error poner el apellido*/
console.error(alumnoObjeto.apellido);
/*En un alert, ponéis la edad*/
alert(alumnoObjeto.edad);


//Otra manera de acceder a las propiedades, que no hay que usar a no ser que el nombre de la propiedad tenga carácteres
/*En la consola poner el nombre*/
console.log(alumnoObjeto["nombre"]);
/*En la consola de error poner el apellido*/
console.error(alumnoObjeto["apellido"]);
/*En un alert, ponéis la edad*/
alert(alumnoObjeto["edad"]);


let clase={ 
    "proyector": true,
    "radiadores": 2,
    "alumnos": { 
        "fila1": ["Fernando", "Miguel", "Banu", "Xavier"],
        "fila2": ["Sergio", "Ginel", "Luis"],
        "fila3": ["Iván"]
    }
}

document.getElementById("parrafo").innerHTML = clase.alumnos.fila2[1];