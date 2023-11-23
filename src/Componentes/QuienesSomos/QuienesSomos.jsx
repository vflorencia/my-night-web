import React from 'react';
import './QuienesSomos.css';
import logo from '../../assets/LogoGoup.png'


export default function QuienesSomos() {
  return (
    <div className='containerNosotras'>
      
{/*---------------------- INTRO ----------------------*/}    

      <div className="inicioNos">
        <div className="leftNos">
          <h1>Bienvenido a MY NIGHT</h1>
          <h2>Tu destino principal para la mejor experiencia en la compra de entradas para emocionantes eventos. Nos enorgullece ser el puente que conecta a los amantes de la música, la diversión y la cultura con los eventos más destacados en la ciudad.</h2>
        </div>
        <div className="rightNos">
          <img src={logo} alt="" width='500rem' />
        </div>
      </div>
 
{/*-------------------- NOSOTROS --------------------*/}    
   
      <div className="inicioNos">
        <div className="rightNos">
          <img src={logo} alt="" width='400rem' />
        </div>
        <div className="leftNos">
          <h2>Nuestra Misión</h2>
          <span>En My Night, nuestra misión es simple pero poderosa: hacer que cada noche cuente. Creemos en la magia de los momentos en vivo, la emoción de la música en directo y la energía contagiosa de la pista de baile. Nuestro objetivo es brindarte un acceso sin complicaciones a una variedad de eventos en XXXXXX, para que puedas vivir experiencias que perduren toda la vida.</span>
        {/* <span> Mas info</span> */}
        </div>
      </div>

      <div className="inicioNos">
        <div className="leftNos">
        <h2>Lo que Ofrecemos</h2>

          <span>- DIVERSIDAD DE EVENTOS: Desde espectaculares conciertos y sets de DJs de renombre hasta noches temáticas únicas, ofrecemos una amplia gama de eventos para todos los gustos.
          </span>
          <span>- COMODIDAD EN LA PALMA DE TU MANO: Nuestra plataforma de venta de entradas te permite explorar eventos, comparar opciones y asegurar tus boletos en cuestión de minutos, todo desde la comodidad de tu dispositivo.</span>
          <span>- EXPERIENCIA SIN ESTRÉS: Olvídate de las largas colas y las preocupaciones de última hora. Con MY NIGHT, planificar tu noche perfecta es fácil y conveniente.</span>
        </div>
        <div className="rightNos">
          <img src={logo} alt="" width='400rem' />
        </div>
      </div>


      <div className="inicioNos">
        <div className="rightNos">
          <img src={logo} alt="" width='400rem' />
        </div>
        <div className="leftNos">
          <h2>Nuestro Compromiso</h2>
          <span>Estamos comprometidos con la satisfacción del cliente y la excelencia en el servicio. Valoramos tu confianza en nosotros y nos esforzamos por brindarte una experiencia sin igual en cada paso del camino. Siempre estamos aquí para responder a tus preguntas y asegurarnos de que tu experiencia de compra de entradas sea impecable.</span>
        {/* <span> Mas info</span> */}
        </div>
      </div>

      <div className="inicioNos">
        <div className="leftNos">
        <h2>Únete a Nosotros</h2>

          <span>Ya sea que estés buscando una noche épica con amigos, una velada romántica o simplemente una experiencia inolvidable, te invitamos a explorar nuestra amplia gama de eventos y a unirte a nosotros. ¡No pierdas la oportunidad de crear recuerdos duraderos y vivir la emoción de la música y la diversión en vivo!
          </span>

        </div>
        <div className="rightNos">
          <img src={logo} alt="" width='400rem' />
        </div>
      </div>




    </div>
  )
}
