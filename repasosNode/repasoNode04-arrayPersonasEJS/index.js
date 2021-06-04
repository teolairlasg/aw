const express = require('express');
const app = express();
const puerto = 3000;
const path = require('path');

app.set('view engine', 'ejs');
let rutaPlantillas = path.join(__dirname, 'plantillas');
app.set('views', rutaPlantillas);

let datos =
 [{
  "name": "Anne",
  "age": 36,
  "cars": [
   "Ford",
   "BMW"
  ]
 }, {
  "name": "John",
  "age": 30,
  "cars": [
   "Ford",
   "BMW",
   "Fiat"
  ]
 }, {
  "name": "Mary",
  "age": 25,
  "cars": [
   "Saab",
   "Toyota",
   "Fiat"
  ]
 }, {
  "name": "Jack",
  "age": 30,
  "cars": [
   "Ford",
   "SEAT",
   "Fiat"
  ]
 },
 {
  "name": "Rose",
  "age": 25,
  "cars": [
   "SEAT",
   "Mazda"
  ]
 }
 ];

app.get('/persona/:num', function (req, res) {
 let num = req.params.num;
 if (datos.length == 0) {
  res.send("No se han encontrado datos")
 } else {
  if (num >= 0 && num < datos.length) {
   res.render('index', datos[num]);
  } else {
   res.send("Error");
  }

 }
});




app.listen(puerto, function () {
 console.log(
  `Servidor en http://localhost:${puerto}`
 );
})