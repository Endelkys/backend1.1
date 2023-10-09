const express = require("express");
const router = express.Router();

// En este archivo de rutas no se crearon los controladores por separado ya que el codigo es corto y legible.

//Rutas con el metodo GET -- Para obtener las vistas.
router.get('/', (req, res) => { // Pagina principal
    res.setHeader('Content-Type', 'text/html');
    res.render('home');
});

router.get('/registro-modalidad', (req, res) => { // Pagina principal
    res.setHeader('Content-Type', 'text/html');
    res.render('registroModalidad');
});

router.get('/registro-categoria', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.render('registroCategoria');
});

router.get('/registro-equipo', (req, res) => { 
    res.setHeader('Content-Type', 'text/html');
    res.render('registroEquipo');
});

router.get('/registro-patrocinador', (req, res) => { 
    res.setHeader('Content-Type', 'text/html');
    res.render('registroPatrocinador');
});



module.exports = router;