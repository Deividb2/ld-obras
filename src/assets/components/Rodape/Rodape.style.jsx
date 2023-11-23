import styled from 'styled-components'
import { cores } from '../../../Global.style'

export const Footer = styled.footer `
    display: flex;;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 10vh;
    background-color: ${cores.azul};
    color: ${cores.branco};
    font-size: 1rem;
    cursor: default;

    span {
        padding: .5rem;
    }
`