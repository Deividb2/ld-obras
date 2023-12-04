import { Faq, TituloFaq, Box, BoxPergunta, BoxResposta, SetaUp, SetaDown, Chat } from './Perguntas.style'
import { useState } from 'react'

export default function Perguntas() {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <Faq>
            <TituloFaq>Perguntas Frequentes</TituloFaq>
            {dadosFaq.map((item, key) => (
                <Box key={key}>
                    <BoxPergunta onClick={() => toggle()} resposta={isOpen? 'fechado' : 'aberto'}>
                        <div>
                            <Chat />
                            {item.pergunta}
                        </div>
                        <button>{isOpen ? <SetaUp /> :  <SetaDown />}</button>
                    </BoxPergunta>
                    <BoxResposta>
                        <p>{item.resposta}</p>
                    </BoxResposta>
                </Box>
            ))}
        </Faq>
    )
}


const dadosFaq = [
    {
        pergunta: 'Como posso solicitar um orçamento?',
        resposta: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, eius! Deserunt fugiat eveniet, omnis doloremque autem eum iusto nihil repellendus enim numquam ea aperiam, cumque at reprehenderit sapiente a ullam.'
    },
    {
        pergunta: 'Quanto tempo de experiência possuem?',
        resposta: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, eius! Deserunt fugiat eveniet, omnis doloremque autem eum iusto nihil repellendus enim numquam ea aperiam, cumque at reprehenderit sapiente a ullam.'
    },
    {
        pergunta: 'Quais áreas vocês prestam serviços?',
        resposta: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, eius! Deserunt fugiat eveniet, omnis doloremque autem eum iusto nihil repellendus enim numquam ea aperiam, cumque at reprehenderit sapiente a ullam.'
    },
    {
        pergunta: 'O preço cabe no meu bolso?',
        resposta: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, eius! Deserunt fugiat eveniet, omnis doloremque autem eum iusto nihil repellendus enim numquam ea aperiam, cumque at reprehenderit sapiente a ullam.'
    },
    {
        pergunta: 'Quais meios de pagamentos?',
        resposta: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, eius! Deserunt fugiat eveniet, omnis doloremque autem eum iusto nihil repellendus enim numquam ea aperiam, cumque at reprehenderit sapiente a ullam.'
    },
]