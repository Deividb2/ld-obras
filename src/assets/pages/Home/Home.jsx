import Cabecalho from '../../components/Cabecalho/Cabecalho'
import Banner from '../../components/Banner/Banner'
import Faixa from '../../components/Faixa/Faixa'
import Servicos from '../../components/Servicos/Servicos'
import Portifolio from '../../components/Portifolio/Portifolio'
import Contato from '../../components/Contato/Contato'
import Rodape from '../../components/Rodape/Rodape'

export default function Home() {

    return (
        <>
            <Cabecalho />
            <Banner />
            <Faixa />
            <Servicos />
            {/* <Portifolio /> */}
            <Contato />
            <Rodape />
        </>
    )
}