import { Geral, TituloPort, Projetos, Fotos, SlideBox, Slide } from './Portifolio.style'

import Acme from '../../../../public/images/acme.png'
import Loja from '../../../../public/images/loja-ds.png'
import Cafeteria from '../../../../public/images/cafeteria.png'
import Carpintaria from '../../../../public/images/carpintaria.png'
import Carros from '../../../../public/images/carrosVintage.png'
import Fitness from '../../../../public/images/fitnessGym.png'


export default function Portifolio() {

    const fotos = [Acme, Loja, Cafeteria, Carpintaria, Carros, Fitness]

    return (
        <Geral>
            <TituloPort>Portifólio</TituloPort>
            <Projetos>
                {fotos.map((elemento, chave) => <Fotos foto={elemento} key={chave}></Fotos>)}
            </Projetos>


            <SlideBox slidesPerView={1} pagination={{clickable: true}} navigation autoplay>
                {fotos.map((elemento, chave) => 
                    <Slide>
                        <Fotos foto={elemento} key={chave}></Fotos>
                    </Slide>
                )}
            </SlideBox>
        </Geral>
    )
}