const express = require('express');
const app = express();
const puerto = 3000;

let datos = {
    "juan": "Juan Martínez",
    "manuel": "Manuel Jiménez",
    "paco": "Francisco Rodríguez",
    "silvia": "Silvia González"
}

let usuarios = {
    "user1": {
        "nombre": "Juan Martínez",
        "email": "juan.martinez@iessierradeguara.com"
    },
    "user2": {
        "nombre": "Manolo Jiménez Martínez",
        "email": "manolo.jimenez@iessierradeguara.com"
    }
}

app.get('/saluda/:nombre', function (req, res) {
    let nom = req.params.nombre;
    res.send('Hola ' + datos[nom]);
});
// Haced la ruta despide que devuelva adios nombre

app.get('/despide/:nombre', function (req, res) {
    let nom = req.params.nombre;
    res.send('Adiós ' + datos[nom]);
});

app.get('/usuario/:numUsuario', function (req, res) {
    let num = req.params.numUsuario;
    let etiqueta = "user"+num;
    let respuesta = "Nombre: "+usuarios[etiqueta].nombre+" E-mail: "+usuarios[etiqueta].email;
    res.send(respuesta);

});

app.listen(puerto, iniciaServidor());
function iniciaServidor() {
    console.log("Servidor en http://localhost:" + puerto);
}