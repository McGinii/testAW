const express = require('express');
const { get } = require('http');
const { parse } = require('path');
const app = express();
const puerto = 3000;
const path = require('path');

let rutaEjer3 = path.join(__dirname, '/');
app.use(express.static(rutaEjer3));

app.get('/2/mas/3', function (req, res) {
    res.send('5')
});

app.get('/:num1/mas/:num2', function(req,res){
    let n1 = req.params.num1;
    let n2 = req.params.num2;
    let solucion = parseInt(n1)+parseInt(n2);
    res.send(solucion.toString());
});

let inicioServidor = function () {
    console.log(`Server iniciado en http://localhost:${puerto}`);
}
app.listen(puerto, inicioServidor());