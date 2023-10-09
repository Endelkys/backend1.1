const express = require("express");
const router = express.Router();


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



module.exports = router;