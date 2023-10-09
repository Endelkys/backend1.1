const express = require("express");
const router = express.Router();


//Rutas con el metodo GET -- Para obtener las vistas.
router.get('/lu', (req, res) => { // Pagina principal
    res.setHeader('Content-Type', 'text/html');
    res.render('home', {mensaje: ''});
});




module.exports = router;