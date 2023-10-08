/* Estructura a guardar para los datos de modalidad
{
    nombreModalidad: "",
    categorias: [
        {   nombreCategoria: "", 
            equiposParticipantes: [{ nombreEquipo: '', participantes: [{nombre: '', cedula: ''}] }]
        }
    ]   
} 
*/
const modalidades = []; 

/* Estructura a guardar para los datos de equipos
{
    nombreEquipo: "", 
    participantes: [{ nombre: '', cedula: ''}]
} 
*/

const equiposAparticipar = [];


/* Estructura a guardar para los datos de los patrocinantes
{
    nombrePatrocinador: "", 
    estadoUbicacion: ""              Ejemplo: 'Trujilo, Valera, plata 3'
} 
*/

const patrocinantes = [];



module.exports = {
    modalidades,
    equiposAparticipar,
    patrocinantes
}
  