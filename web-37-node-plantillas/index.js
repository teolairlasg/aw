const express = require('express');
const path = require('path');
const app = express();
const puerto = 3000;

const rutaPublic = path.join(__dirname,'public');

app.set('view engine', 'ejs');

app.use(express.static(rutaPublic));

app.get('/', function (req, res) {
    let datos = {
        nombre: "Juan"
    };
    res.render('inicio', datos);
});

app.get('/:n', function (req, res) {
    let datos = {
        nombre: req.params.n
    };
    res.render('inicio', datos);
});

app.listen(puerto, iniciaServidor());
function iniciaServidor() {
    console.log('iniciado');
}
