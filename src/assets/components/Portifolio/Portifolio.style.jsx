import styled from 'styled-components'
import { cores } from '../../../Global.style'
import { Titulo } from '../Servicos/Servicos.style'

import { Swiper, SwiperSlide } from 'swiper/react'

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
    display: none;
    
    @media (min-width: 768px) {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1rem;
    }
`

export const SlideBox = styled(Swiper) `
    width: 80vw;
    height: 60vh;
    z-index: 1;

    @media (min-width: 768px) {
        display: none;
    }
`

export const Slide = styled(SwiperSlide) ``

export const Fotos = styled.div `
    background: url(${(props) => props.foto }) no-repeat center / cover;
    width: 100%;
    height: 100%;
    
    @media (min-width: 768px) {        
        width: 80vw;
        height: 40vh;
        max-width: 25rem;
    }
    
`