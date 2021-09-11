import React, { Component } from 'react'
import './EstilosTradicionales.css'
/**
 *  Los estilos de esta manera se pisan en App.js, por lo que usar las etiquetas en un archivo css
 * implica que todos los componentes adquieran los mismos estilos,
 * es mejor para evitar inconvenient3es crear clases. Ejemplo:
 *  h1{ ---> esto implica a que todos los h1 de todos los componentes en mismo color
 *     color: green;
 * }
 * .h1ComponenteMenu{ ---> estilo pensado para que aplique a una etiqueta en particular
 *  color: orange;
 * }
 * <h1 class="h1ComponenteMenu">ESTE TITULO SERÁ NARANJA</h1>
 */

export default class EstilosTradicionales extends Component {
    render() {
        return (
            <>
                
                <h1 class="h1">Manejo de estilos tradicionales</h1>
            </>
        )
    }
}
