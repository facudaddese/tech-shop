import { Route, Routes } from 'react-router-dom'
import NavBar from './components/navbar/NavBar'
import MainLayout from './components/main/MainLayout'
import Notebooks from './components/notebooks/Notebooks'
import Productos from './components/productos/Productos'
import Contacto from './components/contacto/Contacto'
import Footer from './components/footer/Footer'

const App = () => {

  return (
    <div className='grid-principal'>
      <NavBar titulo={"TechShop"} />

      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:id" element={<Productos />} />
        <Route path="/notebooks/:id" element={<Notebooks />} />
        <Route path="/notebooks" element={<Notebooks />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<p>PAGINA NO ENCONTRADA</p>} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App