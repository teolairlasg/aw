const express = require('express');
const puerto = 3000;
const app = express();

//configuración de static con la carpeta publica
app.use(express.static('carpetaPublica'));

// get datosConexion
// que devuelva los datos de req

app.get('/datosConexion', function (req,res) {
    res.send(req.ip);
})



app.listen(puerto, function () {
    console.log(`
    Servidor a la escucha en http://localhost:${puerto}`);
});

