// eje 3 min 19
const express = require('express');
const { parse } = require('path');
const app = express();
const puerto = 3000;
const path = require('path');

let rutaPublic = path.join(__dirname);
app.use(express.static(rutaPublic));

app.get('/2/mas/3', function (req, res){
    res.send('5');

});

app.get('/:num1/mas/:num2', function (req,res){
    let n1 = req.params.num1;
    let n2 = req.params.num2;
    let resultado = parseInt(n1)+parseInt(n2);
    res.send(resultado.toString());
});


app.listen(puerto, iniciaServidor());

function iniciaServidor(){
    console.log (`Servidor a la escucha en http://localhost:${puerto}` );
}