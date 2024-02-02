import './App.css'
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store.js'
import Footer from './Componentes/Footer/Footer'
import Home from './Componentes/HomePpal/Home'
import Navbar from './Componentes/Navbar/Navbar'
import Events from './Componentes/Events/Events.jsx';
import QuienesSomos from './Componentes/QuienesSomos/QuienesSomos';
import Ayuda from './Componentes/Ayuda/Ayuda';
import Registro from './Componentes/Registro/Registro';
import Blog from './Componentes/Blog/Blog';
import Cards from './Componentes/Events/EventDetail';
import Transbank from './Componentes/Transbank/Transbank';
import Contacto from './Componentes/Contacto/Contacto';
import RedirectPage from './Componentes/RedirectPage/RedirectPage';
import Success from './Componentes/Transbank/Status/Success';
import SuccessMob from './Componentes/Transbank/Mobile/Success.jsx';
import Failed from './Componentes/Transbank/Status/Failed.jsx';
import Commit from './Componentes/Transbank/Commit';
import Perfil from './Componentes/Perfil/Perfil'
import CommitMobile from './Componentes/Transbank/Mobile/CommitMobile.jsx';
import Dashboard from './Componentes/Darshboard/Dashboard.jsx';
import LoginAdmin from './Componentes/Darshboard/Login/LoginAdmin.jsx';
import SideBar from './Componentes/Darshboard/SideBar/Sidebar.jsx';
import Bartenders from './Componentes/Darshboard/Bartenders/Bartenders.jsx'
import Products from './Componentes/Darshboard/Products/Products.jsx';
import Eventos from './Componentes/Darshboard/Events/Event.jsx'
import ProductsSales from './Componentes/Darshboard/Sales/ProductsSales.jsx'
import TicketsSales from './Componentes/Darshboard/Sales/TicketsSales.jsx'
import BartenderCreate from './Componentes/Darshboard/Bartenders/BartenderCreate.jsx';
import BartenderEdit from './Componentes/Darshboard/Bartenders/BartenderEdit.jsx';
import ProductEdit from './Componentes/Darshboard/Products/ProductEdit.jsx';
import ProductCreate from './Componentes/Darshboard/Products/ProductCreate.jsx';
import EventEdit from './Componentes/Darshboard/Events/EventEdit.jsx';
import EventCreate from './Componentes/Darshboard/Events/EventCreate.jsx';
import Canceled from './Componentes/Transbank/Status/Canceled.jsx';


function App() {

  return (
    <Provider store={store}>
      <div className="app">
        
        <Routes>
          <Route exact path="/" element={<><Navbar/><Home/><Footer/></>} />
          <Route  path="/quienes-somos" element={<><Navbar/><QuienesSomos/><Footer/></>} />
          <Route  path="/eventos" element={<><Navbar/><Events/><Footer/></>} />
          <Route  path="/ayuda" element={<><Navbar/><Ayuda/><Footer/></>} />
          <Route  path="/registro" element={<><Navbar/><Registro/><Footer/></>} />
          <Route  path="/blog" element={<><Navbar/><Blog/><Footer/></>} />
          <Route  path="/eventos/:id" element={<><Cards/><Footer/></>} />
          <Route  path="/transbank" element={<><Navbar/><Transbank/><Footer/></>} />
          <Route  path="/contacto" element={<><Navbar/><Contacto/><Footer/></>} />
          <Route  path="/redirect" element={<RedirectPage/>} />
          <Route  path="/success" element={<Success/>} />
          <Route  path="/failed" element={<Failed/>} />
          <Route  path="/canceled" element={<Canceled/>} />
          <Route  path="/success-mobile" element={<SuccessMob/>} />
          <Route  path="/commit" element={<Commit/>} />
          <Route  path="/commit-mobile" element={<CommitMobile/>} />
          <Route  path="/perfil" element={<><Navbar/><Perfil/><Footer/></>} />

          {/* Admin */}
          <Route path="/loginadmin" element={<LoginAdmin />}/>
          <Route path="/dashboard" element={<><SideBar/><Dashboard /></>} />
          <Route path="/dashboard/bartenders" element={<><SideBar/><Bartenders/></>} />
          <Route path="/dashboard/products" element={<><SideBar/><Products /></>} />
          <Route path="/dashboard/events" element={<><SideBar/><Eventos /></>} />
          <Route path="/dashboard/product-sales" element={<><SideBar/><ProductsSales /></>} />
          <Route path="/dashboard/ticket-sales" element={<><SideBar/><TicketsSales /></>} />
          <Route path="/dashboard/bartenders/create" element={<><BartenderCreate/></>} />
          <Route path="/dashboard/bartenders/:id" element={<><BartenderEdit/></>} />
          <Route path="/dashboard/products/create" element={<><ProductCreate/></>} />
          <Route path="/dashboard/products/:id" element={<><ProductEdit/></>} />
          <Route path="/dashboard/events/create" element={<><EventCreate/></>} />
          <Route path="/dashboard/events/:id" element={<><EventEdit/></>} />
        </Routes>
      </div>
    </Provider>
  )
}


export default App
