const express = require('express');
const app = express();
const cors = require('cors');

const rutasCampeonato = require('./routes/campeonatoRutas');


app.use(cors()) // Evitar problemas al apuntar las rutas de la API.
app.use(express.json()); // Transformar la data que llegue a formarto JSON
app.use('/api', rutasCampeonato); // Ruta.

app.listen(4000, () => console.log(`Servidor corriendo en el puerto 4000`));