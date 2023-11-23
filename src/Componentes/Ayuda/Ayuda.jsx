import React from 'react';
import './Ayuda.css'
import FaqSection from './Faq/FaqSection';

export default function Ayuda() {

  return (
    <div className='containerAyuda'>
      <div className="faq">
        <h1>Preguntas frecuentes</h1>
        <FaqSection/>
      </div>
      <div className="contact">
        <h1>Contacto</h1>
        <h2>Si no encuentras la respuesta que necesitas en nuestras preguntas frecuentes, por favor contáctanos:</h2>
        <ul>
          <li>Correo electrónico: <b>soporte@mynight.com</b></li>
          <li>Teléfono: <b>+1234567890</b></li>
        </ul>
      </div>
    </div>
  )
}
