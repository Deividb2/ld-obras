import Cabecalho from '../../components/Cabecalho/Cabecalho'
import Banner from '../../components/Banner/Banner'
import Faixa from '../../components/Faixa/Faixa'
import Servicos from '../../components/Servicos/Servicos'
import Portifolio from '../../components/Portifolio/Portifolio'
import Perguntas from '../../components/Perguntas/Perguntas' 
import Contato from '../../components/Contato/Contato'
import Rodape from '../../components/Rodape/Rodape'
import { useState } from 'react'

export default function Home() {

    const [currentSection, setCurrentSection] = useState('cabecalho')
    const hendleNavegation = (section) => {
        setCurrentSection(section)
        document.getElementById(section).scrollIntoView({behavior: 'smooth'})
    }

    return (
        <>
            <Cabecalho hendleNavegation={hendleNavegation} id='cabecalho' currentSection={currentSection} />
            <Banner />
            <Faixa />
            <Servicos id='servicos' currentSection={currentSection} />
            <Portifolio id='portifolio' currentSection={currentSection} />
            <Perguntas />
            <Contato id='contato' currentSection={currentSection} />
            <Rodape />
        </>
    )
}