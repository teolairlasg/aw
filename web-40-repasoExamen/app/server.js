const express = require('express');
const app = express();
const path = require('path');
const puerto = 3000;





// Decirle al servidor que use el motor de plantillas ejs
app.set('view engine', 'ejs');

// Establecer la ruta principal de mis plantillas
let rutaPlantillas = path.join(__dirname, 'plantillas');
app.set('views', rutaPlantillas );

// Esta línea lo que le dice a express es que 
// devuelva cualquier fichero contenido en la 
// carpeta public que sea llamado en la 
// URL.
let rutaPublic = path.join(__dirname,'public');
app.use(express.static(rutaPublic));

//Esta ruta nos devuelve
app.get('/app1', function (peticion, respuesta) {
    let respu = "Respuesta:";
    let dias = ['Lunes','Martes', 'Miercoles'];
    for (const dia of dias) {
        respu=respu+" "+dia;
    }
    respuesta.send(respu);
}); 


app.get('/diaSemana/:numero', function (req, res) {
    let num = req.params.numero;
    if (num == 1) {
        res.send("Lunes");
    } else {
        res.send("No es lunes");
    }
})

let usuarios = {
    "user1" : "Juanito",
    "user2" : "Juanín",
    "user3" : "Juanillo"
}

app.get('/usuario/:usr', function (req,res) {
    let u = "user"+req.params.usr;
    res.send(usuarios[u]);
})

app.get('/usuarioPlantilla/:num', function (req,res) {
    let u = "user"+req.params.num;
    let objetoPlantilla = { "dato": usuarios[u] };
    res.render("usuario", objetoPlantilla);
})





app.listen(puerto, iniciaServidor());

function iniciaServidor() {
    console.log(`Servidor a la escucha en
    http://localhost:${puerto}`);
} 