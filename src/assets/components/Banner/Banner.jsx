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
                    Somos uma equipe de profissionais qualificados e capacitados em reformas, manutenções e reparos residências. Além de realizarmos reparos e pequenas reformas em apartamentos. 
                </p>
            </Descricao>
            <BoxBtn>
                <Btn fundo='#FFC000'>Projetos Realizados</Btn>
                <Btn fundo='#1C3254'>Fale Conosco</Btn>
            </BoxBtn>
        </BannerGeral>
    )
}