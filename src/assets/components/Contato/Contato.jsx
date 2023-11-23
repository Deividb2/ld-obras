import { useState } from 'react'
import { Geral, TituloCont, Formulario, Box, BtnEnviar, InfosContato, Redes, Whats, Insta, Youtube } from './Contato.style'
import emailJs from '@emailjs/browser'
import { Redirecionar } from '../../../App'

export default function Contato() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')

    const Enviar = (event) => {
        event.preventDefault()

        const templateParams = {
            from_name: nome,
            message: mensagem,
            email: email
        }

        emailJs.send("service_bgelgqs", "template_up4vkhi", templateParams, "FMqmfI18KMZxT2wXE")
        .then((response) => {
            alert("Email enviado")
            setNome('')
            setEmail('')
            setMensagem('')
        }, (erro) => {
            console.error("Erro: ", erro)
        })
    }

    return (
        <Geral>
            <div>
                <TituloCont>Entrar em contato</TituloCont>
                <InfosContato>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure nisi ipsum vitae, pariatur sit labore impedit harum voluptas consequuntur dolorum maxime iusto sint eveniet sed placeat nemo velit ab!</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure nisi ipsum vitae, pariatur sit labore impedit harum voluptas consequuntur dolorum maxime iusto sint eveniet sed placeat nemo velit ab!</p>

                    <Redes>
                        <div><Youtube onClick={() => Redirecionar('youtube')} /></div>
                        <div><Insta onClick={() => Redirecionar('insta')} /></div>
                        <div><Whats onClick={() => Redirecionar('whats')} /></div>
                    </Redes>
                </InfosContato>
            </div>
            <Formulario onSubmit={Enviar}>
                <Box>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" name="nome" id="nome" required
                        onChange={(e) => setNome(e.target.value)} 
                        placeholder='Digite seu nome'
                        value={nome} />
                </Box>

                <Box>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required
                        onChange={(e) => setEmail(e.target.value) } 
                        placeholder='Digite seu email'
                        value={email} />
                </Box>

                <Box>
                    <label htmlFor="mensagem">Mensagem</label>
                    <textarea name="Mensagem" id="mensagem" required
                        onChange={(e) => setMensagem(e.target.value)}
                        placeholder='Digite sua mensagem'
                        value={mensagem}></textarea>
                </Box>

                <Box>
                    <BtnEnviar type="submit" value="Enviar" />
                </Box>
            </Formulario>
        </Geral>
    )
}