import styled from 'styled-components'
import { cores } from '../../../Global.style'

export const BannerGeral = styled.section `
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 .5rem; 

    @media (min-width: 768px) {
        padding-left: 2rem; 
        justify-content: center;
        padding-top: 7rem;
    }
`

export const Titulos = styled.div `
    display: flex;
    flex-direction: column;

    span {
        font-size: 2rem;
        font-weight: 700;
        color: ${cores.azul};   
    }

    @media (min-width: 768px) {
        span {
            font-size: 3rem;
        }
    }
`

export const Descricao = styled.div `
    width: 75vw;
    margin: 1rem 0;

    p {
        line-height: 1.5rem;
        font-size: .9rem;
        color: ${cores.preto};
        font-weight: 300;
    }

    @media (min-width: 768px) {
        margin: 1.5rem 0;

        p {
            line-height: 1.8rem;
            font-size: 1.1rem;
        }
    }

    @media (min-width: 1000px) {
        width: 50vw;
    }
`

export const BoxBtn = styled.div `
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    `

export const Btn = styled.a `
    text-decoration: none;
    background-color: ${(props) => props.fundo};
    color: ${cores.branco};
    font-weight: 700;
    padding: .6rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: padding .5s ease;

    &:hover {
        padding-right: 2.5rem;
    }
`