import styled from 'styled-components'
import { cores } from '../../../Global.style'
import Banner1 from '../../../../public/images/banner1.jpg'
import Banner2 from '../../../../public/images/banner2.jpg'
import Banner21 from '../../../../public/images/banner21.jpg'
import Banner3 from '../../../../public/images/banner3.png'
import Banner4 from '../../../../public/images/banner4.jpg'
import Banner5 from '../../../../public/images/banner5.jpg'
import Banner6 from '../../../../public/images/predio-home.jpg'


export const BannerGeral = styled.section `
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 .5rem; 
    background: url(${Banner6}) no-repeat top / cover;

    @media (min-width: 768px) {
        padding-left: 2rem; 
        justify-content: center;
    }
`

export const Titulos = styled.div `
    display: flex;
    flex-direction: column;

    span {
        font-size: 2rem;
        font-weight: 700;
        color: ${cores.azul};   
        text-shadow: 5px 5px 15px ${cores.branco};
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
        color: ${cores.branco};
        font-weight: 300;
        text-shadow: 5px 5px 15px ${cores.preto};
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
    box-shadow: 2px 2px 35px ${cores.preto};
    transition: padding .5s ease;

    &:hover {
        padding-right: 2.5rem;
    }
`