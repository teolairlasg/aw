// Cargar la libreria express para ser un 
// servidor web
const express = require('express');
const app = express();

app.get('/',function name() {
    console.log("un cliente ha conectado");
})

const puerto = 3000;
app.listen(puerto, servidor() );

function servidor() {
    console.log('Servidor iniciado');
}
