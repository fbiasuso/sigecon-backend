const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('EXPRESS INSTALADO CORRECTAMENTE');
});

app.listen(3000, function () {
    console.log('Escuchando el puerto 3000!');
});