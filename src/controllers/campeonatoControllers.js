const { modalidades, equiposAparticipar, patrocinantes } = require('../baseDatosFake/almacenarDatos')

class CampeonatoRobotica {
    agregarModalidad(req, res) {
        res.json({mensaje: 'Prueba'})
    }

    agregarCategoriaAModalidad(req, res) {
        res.json({mensaje: 'Prueba'})
    }

    registrarEquipo(req, res) {
        res.json()
    }

    agregarPatrocinante(req, res) {
        res.json()
    }

    editarEquipo(req, res) {
        res.json()
    }

    editarCategoria(req, res) {
        res.json()
    }

    mostrarPatrocinantes(req, res) {
        res.json()
    }

    mostrarEquipos(req, res) {
        res.json({mensaje: 'Mostrando equipos'})
    }

    mostrarEquiposPorCategoria(req, res) {
        res.json()
    }

    eliminarEquipo(req, res) {
        res.json()
    }

    eliminarCategoria(req, res) {
        res.json()
    }

    eliminarEquipoPorCategoria(req, res) {
        res.json()
    }

}

const campeonatoControllers = new CampeonatoRobotica();

module.exports = {
  campeonatoControllers
}

