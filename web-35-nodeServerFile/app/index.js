const express = require('express');
const app = express();
const puerto = 3000;
const path = require('path');

let rutaMedia = path.join(__dirname, 'media');
app.use(express.static(rutaMedia));

let rutaIndex = path.join(__dirname, 'html', 'index.html');
app.get('/', function (req, res) {
    res.sendFile(rutaIndex);
});

let rutaStyle = path.join(__dirname, 'css', 'style.css');
app.get('/style.css', function (req, res) {
    res.sendFile(rutaStyle);
});

app.get('/imagenAleatoria', function (req, res) {
    let imagenes = [ 'img1.png', 'img2.png', 'img3.png' ];
    let indice = numAleatorio(imagenes.length);
    res.sendFile(path.join(rutaMedia,'img',imagenes[indice]));

})

let inicioServidor = function () {
    console.log('un cliente se ha conectado');
}

app.listen(puerto, inicioServidor);

/* // Esto es equivalente a las 6 lineas anteriores
app.listen(puerto,inicioServidor());

function inicioServidor() {
    console.log('un cliente se ha conectado');
}
*/

function numAleatorio(max) {
    let decimal=Math.random()*max;
    return Math.floor(decimal);
}