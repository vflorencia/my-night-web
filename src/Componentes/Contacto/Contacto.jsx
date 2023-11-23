import React from 'react';
import "./Contacto.css";
import logo from "../../assets/LogoGoup.png"

export default function Contacto() {
    return (
        <div className="unete-section">
          <div className="unete-content">
            <h1>Únete a MY NIGHT</h1>
            <p>
              ¿Eres dueño de un boliche y buscas una solución integral para vender entradas y tragos?
              ¡Estamos aquí para ayudarte! MY NIGHT ofrece una plataforma de venta de
              entradas y gestión de eventos diseñada para que puedas brindar a tus clientes una
              experiencia excepcional y sin complicaciones.
            </p>
    
            <div className="unete-service">
                <div className="serviceData">
                    <h2>Nuestro Servicio</h2>
                    <ul>
                        <li><b><u>Venta de Entradas Online:</u></b> Facilita a tus clientes la compra de entradas.</li>
                        <li><b><u>Gestión de Eventos:</u></b> Administra y promociona tus eventos de manera efectiva.</li>
                        <li><b><u>Venta de Tragos: </u></b>Ofrece la opción de precompra de tragos para tus eventos.</li>
                        <li><b><u>Personalización:</u></b> Adaptamos la plataforma a la identidad de tu boliche.</li>
                    </ul>
                </div>
                <div className="serviceImage">
                    <img src={logo} alt="" />
                </div>
              
            </div>
    
            <div className="unete-benefits">
              <h2>Beneficios de unirse a MY NIGHT</h2>
              <ul>
                <li>
                    <img src={logo} width="200rem" alt="" />
                    <p><b>Amplía tu Alcance:</b></p>
                    <p> Llega a un público más amplio y diverso.</p>
                </li>
                <li>
                    <img src={logo}width="200rem"  alt="" />
                    <p><b>Experiencia de Usuario Mejorada:</b></p>
                    <p> Brinda a tus clientes la comodidad de comprar.</p>
                </li>
                <li>
                    <img src={logo}width="200rem"  alt="" />
                    <p><b>Gestión Simplificada: </b></p>
                    <p> Simplifica la gestión de tus eventos con herramientas eficientes.</p>
                </li>
                <li>
                    <img src={logo}width="200rem"  alt="" />
                    <p><b>Soporte Profesional:</b></p>
                    <p> Nuestro equipo de soporte está aquí para ayudarte.</p>
                </li>
              </ul>
            </div>

            <div className="unete-contact">
                <div className="contact-info">
                <p>
                ¿Listo para Unirte? </p>
                <p>Si estás interesado en ampliar la experiencia que ofreces en tu boliche
                y aprovechar todas las ventajas de MY NIGHT, ¡contáctanos hoy mismo!
                Estamos emocionados de trabajar contigo y ayudarte a llevar tus eventos al siguiente nivel.</p>
                </div>

                <div className="contact-form">
                    <h2>Contacto</h2>
                    <form>
                        <label>Nombre:</label>
                        <input type="text" />
                
                        <label>Correo Electrónico:</label>
                        <input type="email" />
                
                        <label>Mensaje:</label>
                        <textarea></textarea>
                
                        <button type="submit">Enviar</button>
                    </form>
                </div>
          </div>
    
            
          </div>
    

        </div>
      );
    };
