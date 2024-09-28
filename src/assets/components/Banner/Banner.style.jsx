import styled from "styled-components";
import { cores } from "../../../Global.style";
import Banner1 from "../../../../public/images/banner1.jpg";
import Banner2 from "../../../../public/images/banner2.jpg";
import Banner21 from "../../../../public/images/banner21.jpg";
import Banner3 from "../../../../public/images/banner3.png";
import Banner4 from "../../../../public/images/banner4.jpg";
import Banner5 from "../../../../public/images/banner5.jpg";
import Banner6 from "../../../../public/images/predio-home.jpg";

export const BannerGeral = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 0.5rem;
    background: url(${Banner6}) no-repeat top / cover;
    background-blend-mode: color;
    background-color: #000000ce;

    @media (min-width: 768px) {
        padding-left: 2rem;
        justify-content: center;
    }
`;

export const Titulos = styled.div`
    display: flex;
    flex-direction: column;

    span {
        font-size: 2rem;
        font-weight: 700;
        color: ${cores.amarelo};
    }

    @media (min-width: 768px) {
        span {
            font-size: 3rem;
        }
    }
`;

export const Descricao = styled.div`
    width: 75vw;
    margin: 1rem 0;

    p {
        line-height: 1.5rem;
        font-size: 0.9rem;
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

    @media (min-width: 1024px) {
        width: 50vw;
    }

    @media (min-width: 1440px) {
        width: 35vw;
    }
`;

export const BoxBtn = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`;

export const Btn = styled.a`
    text-decoration: none;
    font-weight: 700;
    background-color: ${(props) => props.fundo};
    color: ${(props) => props.text};
    padding: 0.6rem 1rem;
    cursor: pointer;
    transition: padding 0.5s ease;

    /* border-radius: 5px; */
    /* box-shadow: 2px 2px 35px ${cores.preto}; */

    &:hover {
        padding-right: 2.5rem;
    }
`;
