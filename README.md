Para correr el servidor, escribir en la terminal 'npm run dev' (Sin comillas)

Instalar la extension de visual studio code 'Thunder Client' para probar las rutas 


Estructura para guardar los datos de una modalidad
{
    nombreModalidad: "",
    categorias: [
        {   nombreCategoria: "", 
            equiposParticipantes: [{
                nombreEquipo: '', 
                participantes: [{ nombre: '', cedula: '' }] 
            }]
        }
    ]   
} 


Estructura a guardar para los datos de equipos
{
    nombreEquipo: "", 
    participantes: [{ nombre: '', cedula: ''}]
} 



Estructura a guardar para los datos de los patrocinantes
{
    nombrePatrocinador: "", 
    estadoUbicacion: ""    Ejemplo: 'Trujilo, Valera, plata 3
} 



En ThunderClient colocar http://localhost:4000/api/ seguido de la ruta, 
quedaria asi la primera http://localhost:4000/api/registrar-modalidad


Importante poner el Metodo HTPP en Thunder Client en cada solicitud, es decir GET, POST, PUT O DELETE.

