import { useState } from "react"
import { Header, Contato, Whats, WhatsIcon, WhatsNumber, Email, EmailIcon, EmailText, SectionNav, Logo, Navegacao, Menu, ItemMenu, LinkMenu, BoxBtnMenu, MenuBtnMobOpen, MenuBtnMobClose, MenuMob, BtnWhats } from './Cabecalho.style'
import { Redirecionar } from '../../../App'

export default function Cabecalho() {

    const [menu, setMenu] = useState(false)
    const menuToggle = () => {
        setMenu(!menu)
    }

    return (
        <>
            <Header>
                <Contato>
                    <Whats onClick={() => Redirecionar('whats')}>
                        <WhatsIcon />
                        <WhatsNumber>(21) 97720-1714</WhatsNumber>
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
                            <ItemMenu><LinkMenu to='/'>Home</LinkMenu></ItemMenu>
                            <ItemMenu><LinkMenu to='/servicos'>Serviços</LinkMenu></ItemMenu>
                            {/* <ItemMenu><LinkMenu to='/projetos'>Projetos</LinkMenu></ItemMenu> */}
                            <ItemMenu><LinkMenu to='/portifolio'>Portifólio</LinkMenu></ItemMenu>
                            <ItemMenu><LinkMenu to='/contato'>Contato</LinkMenu></ItemMenu>
                        </Menu>
                        <BoxBtnMenu onClick={() => menuToggle()}>
                            {menu? <MenuBtnMobClose /> : <MenuBtnMobOpen />}
                        </BoxBtnMenu>
                    </Navegacao>
                </SectionNav>

                <MenuMob menu={menu? 'aberto' : 'fechado'}>
                    <ItemMenu><LinkMenu to='/'>Home</LinkMenu></ItemMenu>
                    <ItemMenu><LinkMenu to='/servicos'>Serviços</LinkMenu></ItemMenu>
                    <ItemMenu><LinkMenu to='/projetos'>Projetos</LinkMenu></ItemMenu>
                    <ItemMenu><LinkMenu to='/portifolio'>Portifólio</LinkMenu></ItemMenu>
                    <ItemMenu><LinkMenu to='/contato'>Contato</LinkMenu></ItemMenu>
                </MenuMob>
            </Header>
            <BtnWhats onClick={() => Redirecionar('whats')} />
        </>
    )
}