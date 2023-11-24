import styled from 'styled-components'
import { cores } from '../../../Global.style'

export const Geral = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1rem;
    margin: 5rem 0;
    min-height: 100vh;
`

export const Titulo = styled.h2 `
    font-size: 2rem;
    color: ${cores.azul};
    font-weight: 700;
    text-align: center;
    margin-bottom: 2rem;

    @media (min-width: 768px) {
        text-align: left;
        margin-left: 5rem;
        font-size: 2.5rem;
        font-weight: 700;
    }
`

export const ContainerServicos = styled.div `
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    
    @media (min-width: 768px) {
        justify-content: space-around;
    }
`

export const BoxCard = styled.div `
    display: flex;
    flex-direction: column;
    width: 90vw;
    max-width: 20rem;
    min-height: 30vh;

    @media (min-width: 768px) {
        width: 325px;
    }
`

export const CardImg = styled.img `
    width: 100%;
    height: 35vh;
`

export const CardTitulo = styled.h3 `
    margin: 1rem 0;
    font-size: 1.5rem;
    color: ${cores.azul};

    @media (min-width: 768px) {
        font-size: 1.3rem;
    }
`

export const CardDescricao = styled.p `
    line-height: 1.5rem;
    font-size: 1rem;
    color: ${cores.cinza[100]};

    @media (min-width: 768px) {
        line-height: 2rem;
    }
`