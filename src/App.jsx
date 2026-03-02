import { Route, Routes, useLocation } from 'react-router-dom'
import { useInput } from './hooks/useInput'
import { useEffect } from 'react'
import { useAos } from './hooks/useAos'
import { useModal } from './hooks/useModal'
import { useCarrito } from './hooks/useCarrito'
import { CartContext } from './components/cartContext/CartContext'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

  const { modal, handleBtns, itemSeleccionado } = useModal();

  const { carrito, handleSumarCantidad, handleRestarCantidad, agregarAlCarrito, cantidad } = useCarrito();

  return (
    <CartContext.Provider value={{ carrito, handleSumarCantidad, handleRestarCantidad, agregarAlCarrito, cantidad }}>
      <div className='grid-principal'>
        <ToastContainer position="top-right" autoClose={2000} theme="dark" />
        {
          modal &&
          <>
            <div style={{ position: "fixed", top: 0, left: 0, background: "rgba(0, 0, 0, 0.5)", width: "100%", height: "100%", zIndex: 100 }} />
            <ItemDetail itemSeleccionado={itemSeleccionado} onClick={handleBtns}>
              <Button btn="Agregar al carrito" />
            </ItemDetail>
          </>
        }
        <Header titulo="TechShop" busqueda={busqueda} handleBusqueda={handleBusqueda} location={location} />
        <NavBar />

        <Routes>
          <Route path="/" element={<MainLayout onClick={handleBtns} busqueda={busqueda} />} />
          <Route path="/:id" element={<MainLayout onClick={handleBtns} busqueda={busqueda} />} />
          <Route path="/productos" element={<Productos onClick={handleBtns} busqueda={busqueda} />} />
          <Route path="/productos/:id" element={<Productos onClick={handleBtns} busqueda={busqueda} />} />
          <Route path="/notebooks" element={<Notebooks onClick={handleBtns} busqueda={busqueda} />} />
          <Route path="/notebooks/:id" element={<Notebooks onClick={handleBtns} busqueda={busqueda} />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<MainLayout onClick={handleBtns} />} />

        </Routes>
        <Footer />
      </div >
    </CartContext.Provider>
  )
}

export default App