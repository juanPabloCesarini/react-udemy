import React, { Component } from 'react'

export default class Estados extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // estado inicial del componente
            name: "Pepe",
            lastname: "Grillo"
        }
    }
    cambiarDatos() {
        if (this.state.name === "Pepe" && this.state.lastname === "Grillo") {
            this.setState({ name: "Sebas", lastname: "Grillote" });
        }else{
            this.setState({ name: "Pepe", lastname: "Grillo" });
        }
    }
    

    render() {
        return (
            <>
                <h4>El estado inicial del componente es:</h4>
                <br></br>
                <h5>{this.state.name} { this.state.lastname}</h5>
                <button onClick={this.cambiarDatos.bind(this)}>Cambiar Datos</button>
                {/* se usa bind para acceder al objeto, (Solo en componentes de clases) */}
            </>
        )
    }
}
