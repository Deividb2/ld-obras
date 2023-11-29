import { useState } from 'react'
import { Geral, TituloCont, Formulario, Box, BtnEnviar, InfosContato, Redes, Whats, Insta, Youtube } from './Contato.style'
import emailJs from '@emailjs/browser'
import { Redirecionar } from '../../../App'

export default function Contato({ id }) {

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
        <Geral id={id}>
            <div>
                <TituloCont>Entrar em contato</TituloCont>
                <InfosContato>
                    <p>Se você é do Rio de Janeiro e deseja rejuvenecer seu ambiente deixando seu lar mais agradável, está no lugar certo! Aqui na <strong>LD Obras</strong> você não somente tem um atendimento rápido mas também de qualidade.</p>

                    <p>Entre em contato conosco e tire do papel aquela ideia que só a gente consegue realizar.</p>

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