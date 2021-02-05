const express = require('express');
const app = express();
const puerto = 3000;
const path = require('path');

let rutaIndex = path.join(__dirname,'html','index.html');

app.get('/',function (req, res) {
    res.sendFile(rutaIndex);
});

let rutaStyle = path.join(__dirname,'css','style.css');
app.get('/style.css',function (req, res) {
    res.sendFile(rutaStyle);
});


let inicioServidor = function () {
    console.log('un cliente se ha conectado');
}

app.listen(puerto,inicioServidor);

