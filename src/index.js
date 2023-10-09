const express = require('express');
const app = express();
const cors = require('cors');

const rutasCampeonato = require('./routes/campeonatoRutas');
const rutasPaginas = require('./routes/vistasRoutes')


app.use(cors()) // Evitar problemas al apuntar las rutas de la API.
app.use(express.json()); // Transformar la data que llegue a formarto JSON
app.use(express.urlencoded({extended: false})); // Transformar la data que llegue a formarto JSON

//Rutas
app.use(rutasPaginas); // Ruta para las paginas.
app.use('/api', rutasCampeonato); // Ruta.

app.set('view engine', 'pug');
app.set("views", __dirname + "/static");


app.listen(4000, () => console.log(`Servidor corriendo en el puerto 4000`));