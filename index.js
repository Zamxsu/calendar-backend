const express = require('express')
require('dotenv').config()

console.log( process.env );


// Crear el servidor de express
const app = express();

// Directorio Publico
app.use( express.static('public'));

// Lectura y Parseo 
app.use( express.json() )

// Rutas
app.use('/api/auth', require('./routes/auth') );


// Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
    
} )
