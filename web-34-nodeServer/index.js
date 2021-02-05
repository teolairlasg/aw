// Cargar la libreria express para ser un 
// servidor web
const express = require('express');
const app = express();

// req significa petición (request)
// res significa respuesta (response)
app.get('/',function(req, res) {
    console.log("un cliente ha conectado: "+req.ip);
    res.send('Hola, tu ip es '+req.ip);
})

const puerto = 3000;
app.listen(puerto, servidor() );

function servidor() {
    console.log('Servidor iniciado'); 
}
