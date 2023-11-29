import { Geral, Titulo, ContainerServicos, BoxCard, CardImg, CardTitulo, CardDescricao } from './Servicos.style'

import Tanque from '../../../../public/images/servico-tanque.jpg'
import Lage from '../../../../public/images/servico-lage.jpg'
import Cimento from '../../../../public/images/servico-cimento.jpg'
import Construcao from '../../../../public/images/servico-construcao.jpg'
import Manutencao from '../../../../public/images/servico-manutencao.jpg'

const ServicosComponente = ({dados}) => {
    return (
        <BoxCard>   
            <CardImg src={dados.imgSrc} alt={dados.alt} />
            <CardTitulo>{dados.titulo}</CardTitulo>
            <CardDescricao>{dados.descricao}</CardDescricao>
        </BoxCard>
    )
}

export default function Servicos() {

    return (
        <Geral>
            <Titulo>Serviços</Titulo>
            <ContainerServicos>
                {servicosDados.map((elemento, index) => <ServicosComponente dados={elemento} key={index} />)}
            </ContainerServicos>
        </Geral>
    )
}

const servicosDados = [
    {
        imgSrc: Tanque,
        alt: 'imagem de ilustrando serviço de reformas',
        titulo: 'Reforma',
        descricao: 'Dê vida aos seus sonhos de casa com as nossas reformas, onde cada detalhe é cuidadosamente planejado para criar um ambiente que reflete verdadeiramente o seu estilo e personalidade.'
    },
    {
        imgSrc: Construcao,
        alt: 'imagem de ilustrando serviço de construção',
        titulo: 'Construção',
        descricao: 'Desde o primeiro tijolo até a entrega final, comprometemo-nos a realizar projetos de construção excepcionais que não apenas atendem, mas ultrapassam as expectativas.'
    },
    {
        imgSrc: Manutencao,
        alt: 'imagem de ilustrando serviço de manutenção',
        titulo: 'Manutenção',
        descricao: 'Oferecemos soluções personalizadas para garantir que cada detalhe do seu ambiente permaneça funcional ao longo do tempo. Seja para a manutenção preventiva ou para solucionar rapidamente qualquer problema.'
    },
]