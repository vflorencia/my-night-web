import './App.css'
import { Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store.js'
import Footer from './Componentes/Footer/Footer'
import Home from './Componentes/HomePpal/Home'
import Navbar from './Componentes/Navbar/Navbar'
import Eventos from './Componentes/Eventos/Eventos';
import QuienesSomos from './Componentes/QuienesSomos/QuienesSomos';
import Ayuda from './Componentes/Ayuda/Ayuda';
import Registro from './Componentes/Registro/Registro';
import Blog from './Componentes/Blog/Blog';
import Cards from './Componentes/Eventos/EventDetail';
import Transbank from './Componentes/Transbank/Transbank';
import Contacto from './Componentes/Contacto/Contacto';
import RedirectPage from './Componentes/RedirectPage/RedirectPage';
import Success from './Componentes/Transbank/Status/Success';
import Commit from './Componentes/Transbank/Commit';
import Perfil from './Componentes/Perfil/Perfil'
import CommitMobile from './Componentes/Transbank/Mobile/CommitMobile.jsx';

function App() {
  return (
    <>
      <Provider store={store}>
      <div className="app">
        
        <Routes>
          <Route exact path="/" element={<><Navbar/><Home/><Footer/></>} />
          <Route  path="/quienes-somos" element={<><Navbar/><QuienesSomos/><Footer/></>} />
          <Route  path="/eventos" element={<><Navbar/><Eventos/><Footer/></>} />
          <Route  path="/ayuda" element={<><Navbar/><Ayuda/><Footer/></>} />
          <Route  path="/registro" element={<><Navbar/><Registro/><Footer/></>} />
          <Route  path="/blog" element={<><Navbar/><Blog/><Footer/></>} />
          <Route  path="/eventos/:id" element={<><Cards/><Footer/></>} />
          <Route  path="/transbank" element={<><Navbar/><Transbank/><Footer/></>} />
          <Route  path="/contacto" element={<><Navbar/><Contacto/><Footer/></>} />
          <Route  path="/redirect" element={<RedirectPage/>} />
          <Route  path="/success" element={<Success/>} />
          <Route  path="/commit" element={<Commit/>} />
          <Route  path="/commit-mobile" element={<CommitMobile/>} />
          <Route  path="/perfil" element={<><Navbar/><Perfil/><Footer/></>} />
        </Routes>
    </div>
    </Provider>
    </>
  )
}


export default App
