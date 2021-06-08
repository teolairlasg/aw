const express = require('express');
const app = express();
const path = require('path');
const puerto = 3000;

let rutaCarpetaPublica = path.join(__dirname, '..', 'carpeta_publica');
app.use(express.static(rutaCarpetaPublica));

app.listen(puerto, function() {
    console.log(`
    servidor a la escuha en http://localhost:${puerto}`);
});