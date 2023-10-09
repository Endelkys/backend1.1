const { modalidades, equiposAparticipar, patrocinantes } = require('../baseDatosFake/almacenarDatos')

class CampeonatoRobotica {
    agregarModalidad(req, res) { // Este y los 3 siguientes los hace Miguel
        const datos = req.body;
        const verificarRegistroExistente = modalidades.find( modalidad => modalidad.nombreModalidad.toLocaleLowerCase() === datos.nombreModalidad.toLocaleLowerCase() );

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
        const indiceModalidad = modalidades.findIndex(modalidad => modalidad.nombreModalidad.toLocaleLowerCase() === nombreModalidad.toLocaleLowerCase());

        if( indiceModalidad === -1 ) return res.json({error: true, mensaje: 'La modalidad no existe.'})

        modalidades[indiceModalidad].categorias.push({
            nombreCategoria: nombreCategoria, 
            equiposParticipantes: []
        })
        res.json({modalidades})
    }

    registrarEquipo(req, res) {
        const { nombreModalidad, nombreCategoria, nombreEquipo, participantes } = req.body;
        const equipo = {nombreEquipo, participantes}
        equiposAparticipar.push(equipo) // Añadir el equipo al array de los equipos participantes

        const indiceModalidad = modalidades.findIndex(modalidad => modalidad.nombreModalidad === nombreModalidad);
        if( indiceModalidad === -1 ) return res.json({error: true, mensaje: 'La modalidad no existe.'})

        const indiceCategoria = modalidades[indiceModalidad].categorias.findIndex(categoria => categoria.nombreCategoria === nombreCategoria);
        if( indiceCategoria === -1 ) return res.json({error: true, mensaje: 'La categoria no existe.'})
        // Añadir el equipo a la categoria que decida el usuario.
        modalidades[indiceModalidad].categorias[indiceCategoria].equiposParticipantes.push(equipo);

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
        const datos = req.body;

        const indiceEquipo = equiposAparticipar.findIndex(equipo => equipo.nombreEquipo.toLocaleLowerCase() === datos.nombreEquipo?.toLocaleLowerCase());
        
        if(indiceEquipo === -1) return res.json({error: true, mensaje: 'No se ha encontrado un equipo por ese nombre'})
        equiposAparticipar[indiceEquipo] = datos.equipo; // Reemplazando o actualizando con los nuevos datos

        res.json(equiposAparticipar);
    }

    editarCategoria(req, res) {
        const { nombreModalidad, categoriaNuevaData } = req.body;
        const indiceModalidad = modalidades.findIndex(modalidad => modalidad.nombreModalidad === nombreModalidad);

        if( indiceModalidad === -1 ) return res.json({error: true, mensaje: 'La modalidad no existe.'})

        modalidades[indiceModalidad].categorias = categoriaNuevaData;
        res.json({nuevaData: categoriaNuevaData});
    }

    mostrarPatrocinantes(req, res) {
        res.json({patrocinantes}) // mostrando Patrocinantes
    }

    mostrarEquipos(req, res) {
        res.json({equiposAparticipar}) // mostrando Equipos a participar
    }

    mostrarEquiposPorCategoria(req, res) { // Este y los 3 siguientes los hace Luis
        res.json(modalidades) // Mostrar equipos a participar
    }
    
    eliminarEquipo(req, res) {
        const {nombreEquipo} = req.body;
    
        const indiceEquipoABorrar = equiposAparticipar.findIndex(equipo => equipo.nombreEquipo.toLocaleLowerCase() === nombreEquipo.toLocaleLowerCase());
        if (indiceEquipoABorrar === -1) return res.json({error: true, mensaje: 'No se ha encontrado ningun equipo por ese nombre.'})
    
        equiposAparticipar.splice(indiceEquipoABorrar,1);
        res.json({mensaje: 'El equipo ha sido retirado', equiposAparticipar})
    }
    
    eliminarCategoria(req, res) {
        const { nombreModalidad, nombreCategoria } = req.body;
    
        const indiceModalidad = modalidades.findIndex(modalidad => modalidad.nombreModalidad === nombreModalidad);
        if( indiceModalidad === -1 ) return res.json({error: true, mensaje: 'La modalidad no existe.'})
    
        const indiceCategoria = modalidades[indiceModalidad].categorias.findIndex(categoria => categoria.nombreCategoria === nombreCategoria);
        if( indiceCategoria === -1 ) return res.json({error: true, mensaje: 'La categoria no existe.'})
    
        modalidades[indiceModalidad].categorias.splice(indiceCategoria,1); // Eliminando categoria
    
    
        res.json({mensaje: 'Categoria eliminada', datos: modalidades[indiceModalidad]});
    }
    
    eliminarEquipoPorCategoria(req, res) {
        const { nombreModalidad, nombreCategoria, nombreEquipo } = req.body;
    
        const indiceModalidad = modalidades.findIndex(modalidad => modalidad.nombreModalidad === nombreModalidad);
        if( indiceModalidad === -1 ) return res.json({error: true, mensaje: 'La modalidad no existe.'})
    
        const indiceCategoria = modalidades[indiceModalidad].categorias.findIndex(categoria => categoria.nombreCategoria === nombreCategoria);
        if( indiceCategoria === -1 ) return res.json({error: true, mensaje: 'La categoria no existe.'})
    
        const indiceEquipoAEliminar = modalidades[indiceModalidad].categorias[indiceCategoria].equiposParticipantes.findIndex(equipo => equipo.nombreEquipo === nombreEquipo);
        if( indiceEquipoAEliminar === -1 ) return res.json({error: true, mensaje: 'El nombre del equipo no existe.'})
    
    
        modalidades[indiceModalidad].categorias[indiceCategoria].equiposParticipantes.splice(indiceEquipoAEliminar,1);
        res.json({mensaje: 'El equipo ha sido removido con exito', datos: modalidades[indiceModalidad]});
    }

}

const campeonatoControllers = new CampeonatoRobotica();

module.exports = {
  campeonatoControllers
}

