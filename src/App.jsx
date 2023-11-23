import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// PÁGINAS
import Home from './assets/pages/Home/Home'
import Servicos from './assets/pages/Servicos/Servicos'
import Projetos from './assets/pages/Projetos/Projetos'
import Portifolio from './assets/pages/Portifolio/Portifolio'
import Contato from './assets/pages/Contato/Contato'

export default function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/servicos' element={<Servicos />}/>
          <Route path='/projetos' element={<Projetos />}/>
          <Route path='/portifolio' element={<Portifolio />}/>
          <Route path='/contato' element={<Contato />}/>  
        </Routes>
      </Router>
    </>
  )
}

export const Redirecionar = (rede) => {
  switch (rede) {
      case 'whats':
          window.open('https://api.whatsapp.com/send?phone=5521990518769', '_blank')
          break;
      
      case 'email':
          window.open('mailto:suporte.ldobras@gmail.com', '_blank')
          break;
      
      case 'insta':
          window.open('https://www.instagram.com/ld.obras.rj', '_blank')
          break;
      
      case 'youtube':
          window.open('https://youtube.com/@LD.obras_rj', '_blank')
          break;
  }
}
