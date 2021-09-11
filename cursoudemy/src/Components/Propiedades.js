import React, { Component } from 'react'


export default class Propiedades extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Mi nombre es: {this.props.name}</h2>
                <h2>Mi apellido es: {this.props.lastname}</h2>
                <h2>Mis socios: {this.props.los_socios}</h2>
            </div>
        )
    }
}
