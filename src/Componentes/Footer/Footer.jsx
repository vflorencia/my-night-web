import React from 'react';
import './Footer.css';
import Logo from '../../assets/LogoGoup.png'
import Instagram from '@iconscout/react-unicons/icons/uil-instagram';
import Whatsapp from '@iconscout/react-unicons/icons/uil-whatsapp';

export default function Footer() {
  return (
    <div className='containerFooter'>

      {/* <img src={Logo} alt="" /> */}
      <h1>LOGO</h1>

      <div className="contactoFooter">
      <p>Explora nuestros eventos</p>

        <div className="info">
          <a href="/eventos">
            <p>Eventos</p>
          </a>
        </div>
        <div className="info">
          <a href="">
            <p>Whatsapp</p>
          </a>
        </div>

      </div>
      

      <div className="serviciosFooter">
      <p>Conoce nuestros servicios</p>
      <div className="serv">
        <a href="/Servicios"><p>Servicio 1</p></a>
        <a href="/Servicios"><p>Servicio 2</p></a>
        <a href="/Servicios"><p>Servicio 3</p></a>
      </div>
      </div>

      <div className="ayudaFooter">
        <a href="/Conductoras"><p>Nuestro Blog</p></a>
        <a href="/Ayuda"><p>Ayuda</p></a>
        <a href="/QuienesSomos"><p>QuienesSomos</p></a>
      </div>
    </div>
  )
}
