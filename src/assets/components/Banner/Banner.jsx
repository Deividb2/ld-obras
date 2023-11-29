import { BannerGeral, Titulos, Descricao, BoxBtn, Btn } from './Banner.style'

export default function Banner() {
    
    return (
        <BannerGeral>  
            <Titulos>
                <span>Alvenaria e Reformas</span>
                <span>Eleve o padrão da sua residência.</span>
            </Titulos>        
            <Descricao>
                <p>
                    Somos uma equipe de profissionais qualificados e capacitados. Realizamos serviços de reformas, manutenções e reparos residenciais. Nosso trabalho preza pela organização, limpeza e, acima de tudo, a satisfação do cliente. 
                </p>
            </Descricao>
            <BoxBtn>
                <Btn fundo='#FFC000'>Projetos Realizados</Btn>
                <Btn fundo='#1C3254'>Fale Conosco</Btn>
            </BoxBtn>
        </BannerGeral>
    )
}