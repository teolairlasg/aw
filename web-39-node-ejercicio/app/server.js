const express = require('express');
const path = require('path');
const app = express();
const puerto = 3000;

const rutaPublic = path.join(__dirname,'..','public');

app.set('views', path.join(__dirname, 'plantillas'));
app.set('view engine', 'ejs');


app.use(express.static(rutaPublic));

app.get('/', function (req, res) {
    res.render('index');
});

//Cread una ruta /pagina2 que devuelva una plantilla
// llamada secundaria
app.get('/pagina2', function (req, res) {
    res.render('secundaria');
})



app.listen(puerto, iniciaServidor());
function iniciaServidor() {
    console.log('iniciado');
}
