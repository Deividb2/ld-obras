import styled from "styled-components"
import { Link } from 'react-router-dom'
import { cores } from '../../../Global.style'
import LogoImg from '../../../../public/images/logo.png'

// ÍCONES
import { BiMenu } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaPhoneAlt } from "react-icons/fa" 
import { MdEmail } from "react-icons/md" 
import { FaWhatsapp } from "react-icons/fa";


export const Header = styled.header `
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0 0;
`


export const Contato = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem .3rem;
    background-color: ${cores.azul};

    @media (min-width: 480px) {
        flex-direction: row;
        gap: 2rem;
        padding: 0;
        height: 11.3vh;
    }
`

export const Whats = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    cursor: pointer;
`

export const WhatsIcon = styled(FaPhoneAlt) `
    font-size: 1rem;
    color: ${cores.amarelo};
`

export const WhatsNumber = styled.span `
    color: ${cores.branco};
`

export const Email = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    cursor: pointer;
`

export const EmailIcon = styled(MdEmail) `
    font-size: 1.2rem;
    color: ${cores.amarelo};
` 

export const EmailText = styled.span `
    color: ${cores.amarelo};
`

export const SectionNav = styled.section `
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* height: 11.3vh; */
    padding: 0 2rem; 
    background-color: ${cores.amarelo};
`

export const Logo = styled.div `
    background: url(${LogoImg}) no-repeat center / cover;
    height: 80px;
    width: 80px;
`

export const Navegacao = styled.nav ``

export const Menu = styled.ul `
    display: none;

    @media (min-width: 992px) {
        display: flex;
        gap: 1rem;
        list-style: none;
    }
`

export const ItemMenu = styled.li `
    padding: .5rem 1rem;
    border-radius: 5px;
    transition: background-color .5s ease;

    &:hover {
        background-color: ${cores.azul};
        a {
            color: ${cores.amarelo};
        }
    }
`

export const LinkMenu = styled(Link) `
    text-decoration: none;
    font-weight: 700;
    color: ${cores.azul};
`

export const BoxBtnMenu = styled.div `
    display: flex;
    align-items: center;
    font-size: 2rem;
    color: ${cores.azul};

    @media (min-width: 992px) {
        display: none;
    }
`


// MENU MOBILE

export const MenuBtnMobClose = styled(AiOutlineClose) ``
export const MenuBtnMobOpen = styled(BiMenu) ``

export const MenuMob = styled.ul `
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 5rem 0;
    list-style: none;
    background-color: ${cores.azul};
    transition: all .5s ease;

    @media (min-width: 992px) {
        display: none;
    }

    li a {
        color: ${cores.amarelo};
    }

    ${
        (props) => {
            if(props.menu === 'aberto') {
                return `transform: translateX(0)`
            } else {
                return `transform: translateX(100%)`
            }
        }
    }
`

export const BtnWhats = styled(FaWhatsapp) `
    background-color: #06b400;
    color: ${cores.branco};
    padding: .5rem;
    border-radius: 100%;
    font-size: 3rem;
    position: fixed;
    bottom: 2rem;
    right: 1rem;
    cursor: pointer;
    animation: WhatsAnimate infinite alternate 1.5s;

    @media (min-width: 678px) {
        padding: .9rem;
        font-size: 4rem;
        bottom: 2rem;
        right: 2rem;
    }
`