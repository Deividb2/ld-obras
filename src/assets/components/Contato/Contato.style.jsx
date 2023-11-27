import styled from 'styled-components'
import { cores } from '../../../Global.style'
import { Titulo } from '../Servicos/Servicos.style'

// ÍCONES
import { FaYoutube, FaInstagram, FaWhatsapp  } from "react-icons/fa6";

export const Geral = styled.section `
    display: flex;
    flex-direction: column;
    margin: 3rem 0;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-around;
        gap: 1rem;
        padding: 0 1rem;
    }
`

export const TituloCont = styled(Titulo) `
    margin-left: 0;
`

export const InfosContato = styled.div `
    max-width: 30rem;
    display: none;

    p {
        color: ${cores.cinza[100]};
        line-height: 25px;

        strong {
            color: ${cores.azul};
        }
    }

    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        font-size: 1.1rem;
    }
`

export const Redes = styled.div `
    display: flex;
    gap: 2rem;
    font-size: 2rem;
    margin-top: 1rem;
    color: ${cores.azul};   

    div {
        background-color: ${cores.preto};
        color: ${cores.branco};
        border-radius: 100%;
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        transition: transform .5s ease;
        transition: color 1.5s ease;
        transition: background-color .5s ease;

        &:hover {
            transform: scale(1.1);
            color: ${cores.azul};
            background-color: ${cores.amarelo};
        }
    }
`

export const Youtube = styled(FaYoutube) ``
export const Insta = styled(FaInstagram) ``
export const Whats = styled(FaWhatsapp) ``

// FORMULÁRIO

export const Formulario = styled.form `
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 1rem;
    max-width: 35rem;

    @media (min-width: 768px) {
        padding: 0;
        width: 30rem;
    }
`

export const Box = styled.div `
    display: flex;
    flex-direction: column;
    gap: .4rem;

    label {
        color: ${cores.preto};
        font-weight: 700;
        &::after {
            content: ' *';
            color: red;
        }
    }

    input {
        padding: .5rem 1rem;
        font-size: .9rem;
        outline: none;
        border: 1px solid ${cores.cinza[100]};
        &:hover {
            outline: 1px solid ${cores.cinza[100]};
        }

        @media (min-width: 768px) {
            padding: .8rem 1rem;
            font-size: 1rem;
        }
    }

    textarea {
        height: 10rem;
        resize: none;
        padding: 1rem;
        font-size: 1rem;
        outline: none;
        border: 1px solid ${cores.cinza[100]};
        line-height: 20px;
        letter-spacing: 2px;

        &:hover {
            outline: 1px solid ${cores.cinza[100]};
        }
    }
`

export const BtnEnviar = styled.input `
    background-color: ${cores.azul};
    color: ${cores.branco};
    outline: none !important;
    border: none !important;

    @media (min-width: 768px) {
        border-radius: 15px;
        max-width: 10rem;
        font-weight: 700;
        transition: all .5s ease;
        
        &:hover {
            max-width: 12rem;
            padding-right: 3rem;
            background-color: ${cores.amarelo};
            color: ${cores.preto};
        }
    }
`