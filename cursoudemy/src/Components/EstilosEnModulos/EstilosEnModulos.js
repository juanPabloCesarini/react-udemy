import React, { Component } from 'react'
import styles from './EstilosEnModulos.module.css'

export default class EstilosEnModulos extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <>
                <h1 className={styles.color_h1}> Hola estoy en otro componente</h1>
            </>
        )
    }
}
