import { Geral, Titulo, ContainerServicos, BoxCard, CardImg, CardTitulo, CardDescricao } from './Servicos.style'

import Tanque from '../../../../public/images/servico-tanque.jpg'
import Lage from '../../../../public/images/servico-lage.jpg'
import Cimento from '../../../../public/images/servico-cimento.jpg'

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
        alt: '',
        titulo: 'Reforma',
        descricao: 'Executamos o projetos de manutenção com equipe especializada. Obra limpa e sem atrapalhar na rotina de trabalho dos funcionários.'
    },
    {
        imgSrc: Lage,
        alt: '',
        titulo: 'Construção',
        descricao: 'Executamos o projetos de manutenção com equipe especializada. Obra limpa e sem atrapalhar na rotina de trabalho dos funcionários.'
    },
    {
        imgSrc: Cimento,
        alt: '',
        titulo: 'Manutenção',
        descricao: 'Executamos o projetos de manutenção com equipe especializada. Obra limpa e sem atrapalhar na rotina de trabalho dos funcionários.'
    },
]