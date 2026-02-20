import { Route, Routes, useLocation } from 'react-router-dom'
import { useInput } from './hooks/useInput'
import { useEffect } from 'react'
import Header from './components/header/Header'
import NavBar from './components/navbar/NavBar'
import MainLayout from './components/main/MainLayout'
import Notebooks from './components/notebooks/Notebooks'
import Productos from './components/productos/Productos'
import Contacto from './components/contacto/Contacto'
import Footer from './components/footer/Footer'
import { useAos } from './hooks/useAos'

const App = () => {
  useAos();

  const { busqueda, handleBusqueda, setBusqueda } = useInput();

  let location = useLocation();
  useEffect(() => {
    setBusqueda('');
  }, [location.pathname, setBusqueda])  

  return (
    <div className='grid-principal'>
      <Header titulo="TechShop" busqueda={busqueda} handleBusqueda={handleBusqueda} location={location} />
      <NavBar />

      <Routes>
        <Route path="/" element={<MainLayout busqueda={busqueda} />} />
        <Route path="/:id" element={<MainLayout busqueda={busqueda} />} />
        <Route path="/productos" element={<Productos busqueda={busqueda} />} />
        <Route path="/productos/:id" element={<Productos busqueda={busqueda} />} />
        <Route path="/notebooks" element={<Notebooks busqueda={busqueda} />} />
        <Route path="/notebooks/:id" element={<Notebooks busqueda={busqueda} />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<MainLayout />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App