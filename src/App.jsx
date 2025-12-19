import NavBar from './components/Navbar/NavBar'
import MainLayout from './components/Main/MainLayout'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <NavBar titulo="TechShop" />
      <MainLayout />
      <Footer />
    </>
  )
}

export default App