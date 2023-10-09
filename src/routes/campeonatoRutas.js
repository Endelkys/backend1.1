const express = require("express");
const router = express.Router();
const { campeonatoControllers } = require("../controllers/campeonatoControllers");


//Rutas con el metodo POST -- Para registrar
router.post('/registrar-modalidad', campeonatoControllers.agregarModalidad);
router.post('/registrar-categoria-a-modalidad', campeonatoControllers.agregarCategoriaAModalidad);
router.post('/registrar-equipo', campeonatoControllers.registrarEquipo);
router.post('/registrar-patrocinante', campeonatoControllers.agregarPatrocinante);

//Rutas con el metodo PUT -- Para editar registros existentes.
router.put('/editar-equipo', campeonatoControllers.editarEquipo);
router.put('/editar-categoria', campeonatoControllers.editarCategoria);

//Rutas con el metodo GET -- Para obtener registros.
router.get('/obtener-equipos', campeonatoControllers.mostrarEquipos);
router.get('/obtener-patrocinantes', campeonatoControllers.mostrarPatrocinantes);
router.get('/obtener-equipos-por-categoria', campeonatoControllers.mostrarEquiposPorCategoria);

//Rutas con el metodo DELETE -- Para eliminar registros.
router.delete('/eliminar-equipo', campeonatoControllers.eliminarEquipo)
router.delete('/eliminar-categoria', campeonatoControllers.eliminarCategoria)
router.delete('/eliminar-equipo-por-categoria', campeonatoControllers.eliminarEquipoPorCategoria)


module.exports = router;