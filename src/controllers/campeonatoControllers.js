const { modalidades, equiposAparticipar, patrocinantes } = require('../baseDatosFake/almacenarDatos')

class CampeonatoRobotica {
    agregarModalidad(req, res) { // Este y los 3 siguientes los hace Miguel
        const datos = req.body;
        const verificarRegistroExistente = modalidades.find( modalidad => modalidad.nombreModalidad === datos.nombreModalidad );

        if (verificarRegistroExistente) return res.json({error: true, mensaje: 'Ya existe una modalidad registrada con ese nombre'})

        const modalidadAGuardar = {
            nombreModalidad: datos.nombreModalidad,
            categorias: []   
        } 
        modalidades.push(modalidadAGuardar)
        res.json({mensaje: 'Modalidad agregada con exito.', modalidades})
    }

    agregarCategoriaAModalidad(req, res) {
        const { nombreModalidad, nombreCategoria } = req.body;
        const indiceModalidad = modalidades.findIndex(modalidad => modalidad.nombreModalidad === nombreModalidad);

        if( indiceModalidad === -1 ) return res.json({error: true, mensaje: 'La modalidad no existe.'})

        modalidades[indiceModalidad].categorias.push({
            nombreCategoria: nombreCategoria, 
            equiposParticipantes: []
        })
        res.json({modalidades})
    }

    registrarEquipo(req, res) {
        const { nombreModalidad, nombreCategoria, equipo } = req.body;

        const indiceModalidad = modalidades.findIndex(modalidad => modalidad.nombreModalidad === nombreModalidad);
        if( indiceModalidad === -1 ) return res.json({error: true, mensaje: 'La modalidad no existe.'})

        const indiceCategoria = modalidades[indiceModalidad].categorias.findIndex(categoria => categoria.nombreCategoria === nombreCategoria);
        if( indiceCategoria === -1 ) return res.json({error: true, mensaje: 'La categoria no existe.'})
        modalidades[indiceModalidad].categorias[indiceCategoria].equiposParticipantes.push(equipo)

        res.json({modalidades})
    }

    agregarPatrocinante(req, res) {
        const datos = req.body;
        const verificarRegistroExistente = patrocinantes.find( patrocinador => patrocinador.nombrePatrocinador === datos.nombrePatrocinador );

        if (verificarRegistroExistente) return res.json({error: true, mensaje: 'Ese patrocinador ya esta registrado.'})

        const registroAGuardar = {
            nombrePatrocinador: datos.nombrePatrocinador, 
            estadoUbicacion: datos.estadoUbicacion   // Ejemplo: "Trujilo, Valera, plata 3"
        } 
        patrocinantes.push(registroAGuardar)
        res.json({mensaje: 'Patrocinante agregado con exito.', patrocinantes})
    }

    editarEquipo(req, res) { // Este y los 3 siguientes los hace Endelkys
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

    mostrarEquiposPorCategoria(req, res) { // Este y los 3 siguientes los hace Luis
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

