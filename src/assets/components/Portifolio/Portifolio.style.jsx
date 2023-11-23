import styled from 'styled-components'
import { cores } from '../../../Global.style'
import { Titulo } from '../Servicos/Servicos.style'

export const Geral = styled.section `
    min-height: 100vh;
    margin: 4rem 0;
    display: flex;
    flex-direction: column;
`

export const TituloPort = styled(Titulo) ``

export const Projetos = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
`

export const Fotos = styled.div `
    background: url(${(props) => props.foto }) no-repeat center / cover;
    width: 80vw;
    height: 40vh;
    max-width: 25rem;
`