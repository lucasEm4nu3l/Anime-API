import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/home'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Sobre } from './pages/sobre'
import { Contato } from './pages/contato'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/sobre' element={<Sobre/>}/>
    <Route path='/contato' element={<Contato/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  </StrictMode>,
)

