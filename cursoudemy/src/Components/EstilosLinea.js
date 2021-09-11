import React, { Component } from 'react'

export default class EstilosLinea extends Component {
    render() {
        const estilos = {
            backgroundColor: 'black',
            height: '50px',
            width: '300px',
            color: 'indigo',
            marginLeft: '10px',
        }
        return (
            
            <>
                <div style={estilos} className="container">
                    <h4>HOLA COMO ESTAS</h4>
                </div>
            </>
        )
    }
}
