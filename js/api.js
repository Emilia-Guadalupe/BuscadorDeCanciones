import * as UI from './interfaz.js';

class API {
    constructor(artista, cancion) {
        this.artista = artista;
        this.cancion = cancion;

    }

    consultarAPI() {
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

        fetch(url)
            .then( respuesta => respuesta.json() )
            .then( resultado => {

                if(resultado.lyrics) {
                    const { lyrics } = resultado;

                UI.divResultado.textContent = lyrics;

                UI.headingResultado.textContent = `Letra de la canción: ${this.cancion} - ${this.artista}`;
                } else {
                    UI.divMensajes.textContent = 'La canción no existe, probá con otra búsqueda';
                    UI.divMensajes.classList.add('error');

                    setTimeout(function() {
                        UI.divMensajes.remove();
                    }, 3000)
                }
            })
    }
}

export default API;