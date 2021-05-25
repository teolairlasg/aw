const express = require('express');
const path = require('path');
const app = express();
const puerto = 3000;

function informarEscucha() {
    console.log(`El servidor está a la escucha
en el puerto ${puerto}`);
}

app.get('/', function (req, res) {
    res.send('Hola');
})

app.get('/index',function (req,res) {
    let rutaIndex = path.join(__dirname,'html','index.html');
    res.sendFile(rutaIndex);
})

app.get('/style.css',function (req,res) {
    let rutaCSS = path.join(__dirname,'css','style.css');
    res.sendFile(rutaCSS);
})

app.get('/app.js',function (req,res) {
    let rutaJS = path.join(__dirname,'jsCliente','app.js');
    res.sendFile(rutaJS);
})


app.listen(puerto, informarEscucha());



