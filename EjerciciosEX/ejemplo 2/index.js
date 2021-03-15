const express = require('express');
const app = express();
const puerto = 3000;
const path = require('path');


app.get('/', function (req, res){
    res.send('Hola Mundo');

});

app.get('/imagen', function (req, res){
    res.sendFile(__dirname+('/img1.png'))

});

app.get('/tabla', function (req, res){
    res.sendFile(__dirname+('/tabla.html'))

});

app.listen(puerto, iniciaServidor());

function iniciaServidor(){
    console.log (`Servidor a la escucha en http://localhost:${puerto}` );
}