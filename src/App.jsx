import { Route, Routes, useLocation } from 'react-router-dom'
import { useInput } from './hooks/useInput'
import { useEffect } from 'react'
import { useAos } from './hooks/useAos'
import { useModal } from './hooks/useModal'
import Header from './components/header/Header'
import NavBar from './components/navbar/NavBar'
import MainLayout from './components/main/MainLayout'
import Notebooks from './components/notebooks/Notebooks'
import Productos from './components/productos/Productos'
import ItemDetail from './components/ItemDetail/ItemDetail'
import Button from './components/button/Button'
import Contacto from './components/contacto/Contacto'
import Footer from './components/footer/Footer'

const App = () => {
  useAos();

  const { busqueda, handleBusqueda, setBusqueda } = useInput();

  let location = useLocation();
  useEffect(() => {
    setBusqueda('');
  }, [location.pathname, setBusqueda])

  const { modal, handleModal, handleItem, itemSeleccionado } = useModal();
  const handleVerMas = (producto) => {
    handleItem(producto);
    handleModal();
  }

  return (
    <div className='grid-principal'>
      <Header titulo="TechShop" busqueda={busqueda} handleBusqueda={handleBusqueda} location={location} />
      <NavBar />

      <Routes>
        <Route path="/" element={<MainLayout onClick={handleVerMas} busqueda={busqueda} />} />
        <Route path="/:id" element={<MainLayout onClick={handleVerMas} busqueda={busqueda} />} />
        <Route path="/productos" element={<Productos onClick={handleVerMas} busqueda={busqueda} />} />
        <Route path="/productos/:id" element={<Productos onClick={handleVerMas} busqueda={busqueda} />} />
        <Route path="/notebooks" element={<Notebooks onClick={handleVerMas} busqueda={busqueda} />} />
        <Route path="/notebooks/:id" element={<Notebooks onClick={handleVerMas} busqueda={busqueda} />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<MainLayout onClick={handleVerMas} />} />
      </Routes>
      {
        modal &&
        <>
          <div style={{ position: "fixed", top: 0, left: 0, background: "rgba(0, 0, 0, 0.5)", width: "100%", height: "100%" }} />
          <ItemDetail itemSeleccionado={itemSeleccionado} onClick={handleVerMas}>
            <Button btn="Agregar al carrito" />
          </ItemDetail>
        </>
      }

      <Footer />
    </div>
  )
}

export default App