//Creamos el servidor
const routes = require('./routes/productos'); //Importamos las rutas
const express = require('express');
const app = express();
app.use(express.json());

//Vamos a usar routes y la ruta empezara con /productos
app.use('/productos', routes); 

//El servidor empieza a correr en el puerto 3000
app.listen(3000, function() 
{
    console.log('Servidor corriendo en el puerto 3000')
});