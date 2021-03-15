const express = require('express');
const app = express();
const puerto = 3000;
const path = require('path');

let rutaPublic = path.join(__dirname, 'public');
app.use(express.static(rutaPublic));

app.listen(puerto, iniciaServidor());

function iniciaServidor(){
    console.log (`Servidor a la escucha en http://localhost:${puerto}` );
}

