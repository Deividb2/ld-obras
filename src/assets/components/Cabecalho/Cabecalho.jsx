import { useState } from "react"
import { Header, Contato, Whats, WhatsIcon, WhatsNumber, Email, EmailIcon, EmailText, SectionNav, Logo, Navegacao, Menu, ItemMenu, LinkMenu, BoxBtnMenu, MenuBtnMobOpen, MenuBtnMobClose, MenuMob, BtnWhats } from './Cabecalho.style'
import { Redirecionar } from '../../../App'

export default function Cabecalho({ hendleNavegation, id }) {

    const [menu, setMenu] = useState(false)
    const menuToggle = () => {
        setMenu(!menu)
    }

    return (
        <>
            <Header id={id} menu={menu? 'aberto' : 'fechado'}>
                <Contato>
                    <Whats onClick={() => Redirecionar('whats')}>
                        <WhatsIcon />
                        <WhatsNumber>(21) 99051-8769</WhatsNumber>
                    </Whats>
                    <Email onClick={() => Redirecionar('email')}>
                        <EmailIcon />
                        <EmailText>suporte.ldobras@gmail.com</EmailText>
                    </Email>
                </Contato>

                <SectionNav>
                    <Logo></Logo>
                    <Navegacao>
                        <Menu>
                            <ItemMenu><LinkMenu onClick={() => hendleNavegation('cabecalho')}>Home</LinkMenu></ItemMenu>
                            <ItemMenu><LinkMenu onClick={() => hendleNavegation('servicos')}>Serviços</LinkMenu></ItemMenu>
                            <ItemMenu><LinkMenu onClick={() => hendleNavegation('faq')}>FAQs</LinkMenu></ItemMenu>
                            <ItemMenu><LinkMenu onClick={() => hendleNavegation('portifolio')}>Portifólio</LinkMenu></ItemMenu>
                            <ItemMenu><LinkMenu onClick={() => hendleNavegation('contato')}>Contato</LinkMenu></ItemMenu>
                        </Menu>
                        <BoxBtnMenu onClick={() => menuToggle()}>
                            {menu? <MenuBtnMobClose /> : <MenuBtnMobOpen />}
                        </BoxBtnMenu>
                    </Navegacao>
                </SectionNav>

                <MenuMob menu={menu? 'aberto' : 'fechado'}>
                    <ItemMenu><LinkMenu onClick={() => hendleNavegation('cabecalho')}>Home</LinkMenu></ItemMenu>
                    <ItemMenu><LinkMenu onClick={() => hendleNavegation('servicos')}>Serviços</LinkMenu></ItemMenu>
                    <ItemMenu><LinkMenu>Projetos</LinkMenu></ItemMenu>
                    <ItemMenu><LinkMenu onClick={() => hendleNavegation('portifolio')}>Portifólio</LinkMenu></ItemMenu>
                    <ItemMenu><LinkMenu onClick={() => hendleNavegation('contato')}>Contato</LinkMenu></ItemMenu>
                </MenuMob>
            </Header>
            <BtnWhats onClick={() => Redirecionar('whats')} />
        </>
    )
}