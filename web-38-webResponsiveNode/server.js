const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

let rutaPublic = path.join(__dirname, 'public');
app.use(express.static(rutaPublic));
app.listen(port, serverStart());

function serverStart() {
    console.log("Servidor iniciado en http://localhost:3000")
}