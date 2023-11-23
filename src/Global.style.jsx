import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Sen:wght@400;500;600;700;800&display=swap');


    body, * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Sen', sans-serif;
    }

    body {
        min-height: 300vh;
    }

    @keyframes WhatsAnimate {
        to {
            transform: translateY(-2rem);
        }

        from {
            transform: translateY(0);
        }
    }

    // estilizando scroll
    ::-webkit-scrollbar {
        width: 10px;
        background-color: #fff;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 15px;
        background-color: #1C3254;
    }
`

// VARIÁVEIS

export const fontes = {
    Heebo: "'Heebo', sans-serif",
    Playfair: "'Playfair Display', serif",
    Sen: "'Sen', sans-serif"
}

export const cores = {
    branco: '#fff',
    preto: '#000',
    azul: '#1C3254',
    amarelo: '#FFC000',
    cinza: {
        100: '#5B5B5B',
        200: '#AAAAAA'
    }
}