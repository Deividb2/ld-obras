import styled from 'styled-components'
import { cores } from '../../../Global.style'
import { Titulo } from '../Servicos/Servicos.style'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { HiOutlineChatAlt2 } from "react-icons/hi";

export const Faq = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem; 

    @media (min-width: 768px) {
        min-height: 75vh;
    }
`

export const TituloFaq = styled(Titulo) `
    margin: 0 0 2rem 0;
`

export const Box = styled.details `
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ddd;
    width: 90vw;
    max-width: 35rem;
`

export const BoxPergunta = styled.summary `
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f1f4f9;
    padding: .8rem 1rem;
    width: 100%;
    font-weight: 700;
    font-size: .9rem;
    color: #333333;
    list-style: none;

    /* ${(props) => {
        if (props.resposta == 'aberto') {
            return `background-color: rgba(241, 244, 249, 1);`
        } else {
            return `background-color: #999999;`
        }
    }} */

    div {
        display: flex;
        gap: .5rem;
    }

    button {
        background-color: transparent;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 1.1rem;
    }
`

export const BoxResposta = styled.div `
    background-color: #333333;
    color: #fff;
    border-top: 1px solid #5f5f5f;
    width: 100%;
    padding: 1rem;
    /* text-align: center; */
    font-size: .9rem;
`

export const SetaUp = styled(IoIosArrowUp) `color: #1f84e9;`
export const SetaDown = styled(IoIosArrowDown) `color: #117eeb;`
export const Chat = styled(HiOutlineChatAlt2) ``