import styled from 'styled-components'
import { cores } from '../../../Global.style' 

export const Geral = styled.section `
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    min-height: 15vh;
    padding: 1rem;
    background-color: ${cores.amarelo};

    p {
        color: ${cores.azul};
        font-size: 1.5rem;
        font-weight: 700;
    }

    @media (min-width: 850px) {
        p {
            width: 50vw;
            font-size: 2rem;
        }
    }
`