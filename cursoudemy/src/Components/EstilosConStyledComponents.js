import React, { Component } from 'react'
import styled, {keyframes} from 'styled-components'
import './variables.css'

export default class EstilosConSyledComponents extends Component {

    render() {

        const fondoTexto = {
            color: 'yellow',
            width: '50%',
        }

        const animaTexto = keyframes`
        from {
            color: grey;
        }
        to {
            color: violet;
        }
        `
        const Cabecera = styled.header`
            height:var(--altoHeader);
            width:var(--anchoHeader);
            background-color:var(--colorHeader);
        `
        const Titulo = styled.h3`
            color:var(--colorTexto);
            font-size:29px;
            background-color:${fondoTexto.color};
            width:${fondoTexto.width};
            &:hover{
                color:black;
            
            }
            animation: ${animaTexto} 1s infinite;
        `

     
       
        
        return (
            <>
                <Cabecera>
                    <Titulo>
                        PRUEBA DE STYLED COMPONENTS
                    </Titulo>
                </Cabecera>
            </>
        )
    }
}
