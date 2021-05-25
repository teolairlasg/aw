const express = require('express');
const app = express();
const path = require('path');
const puerto = 3000;


// creo una variable con la ruta a la carpeta
// de las vistas EJS
let rutaVistas = path.join(__dirname, 'vistasEJS');

// le digo a express que voy a utilizar el motor
// de plantillas EJS
app.set('view engine', 'ejs');

// cambio el directorio por defecto (__dirname/views)
// a la ruta que he definido antes
app.set('views', rutaVistas);

//abro la conexión y me quedo a la escucha
app.listen(puerto, function () {
    console.log(`Servidor iniciado en 
http://localhost:3000`
    );
})

// rutas raíz
app.get('/', function (req,res) {
    let objeto = {
        nombre: "Banu"
    }
    // renderizamos la vista index.ejs

    res.render('index', objeto);
});

// ruta con parámetros
app.get('/:nom', function (req,res) {
    let objeto = {
        nombre: req.params.nom
    }
    // renderizamos la vista index.ejs

    res.render('index', objeto);
});

// crea una ruta con un parámetro numérico
// al renderizar la plantilla tienes que mostrar
// el doble del valor que ha pasado el usuario






