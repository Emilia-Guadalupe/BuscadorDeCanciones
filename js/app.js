import * as UI from './interfaz.js';
import API from './api.js';

UI.formularioBuscar.addEventListener('submit', buscarCancion);

//Función para buscar las canciones
function buscarCancion(e) {
    e.preventDefault();

    //Obtener datos del formulario 

    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if(artista === '' || cancion === '') {
        //Si el usuario dejó al menos un campo vacío, mostrar un error
        UI.divMensajes.textContent = 'Error, complete todos los campos';
        UI.divMensajes.classList.add('error');

        setTimeout(function() {
            UI.divMensajes.remove();
        }, 3000);

        return;
    }

    //Consultaar API

    const busqueda = new API(artista, cancion);

    busqueda.consultarAPI()

}