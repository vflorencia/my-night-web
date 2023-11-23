import React from 'react';
import './Home.css';
import '../Eventos/Eventos.css';
import { Link } from 'react-router-dom';
import { events } from "../Eventos/events"
import logo from '../../assets/LogoGoup.png'
import logo1 from '../../assets/logo1.png'
import logo2 from '../../assets/logo2.png'
import logo3 from '../../assets/logo3.png'


const Inicio = () => {
  return (
    <div className="inicio">
      <section className="intro">
        <div className="intro-text">
          <h1>Bienvenidx a MY NIGHT</h1>
          <p>Explora los eventos más emocionantes y compra tus entradas ahora.</p>
        </div>
        <div className="intro-image">
          <img src={logo} alt="Imagen de Bienvenida" />
        </div>
      </section>

      <section className="proximos-eventos">
        <h2>Próximos Eventos</h2>
        <div className="eventos-list">
          {events.map((event, index) => (
            <Link to={`/eventos/${event.id}`} key={index} className="evento-card">
              <h3>{event.name}</h3>
              <p>Fecha: {event.date.toLocaleDateString()} | Hora: {event.date.toLocaleTimeString()}</p>
              <img src={event.image} alt="" />
            </Link>
          ))}
        </div>
      </section>

      <section className="porque-elegirnos">
        <div className="porque-image">
          <img src={logo} alt="Por qué elegirnos" />
        </div>
        <div className="porque-text">
          <h2>¿Por qué elegirnos?</h2>
          <p>Ofrecemos experiencias únicas, artistas de renombre y una atmósfera incomparable para tu diversión.</p>
          <p>
            En My Night, nuestra misión es simple pero poderosa: hacer que cada noche cuente. Creemos en la magia de los momentos en vivo, la emoción de la música en directo y la energía contagiosa de la pista de baile. Nuestro objetivo es brindarte un acceso sin complicaciones a una variedad de eventos en XXXXXX, para que puedas vivir experiencias que perduren toda la vida.</p>
        </div>
      </section>

      <section className="llamado-accion">
        <h2>¡Descarga la App y disfruta al máximo!</h2>
        <p>Compra tus entradas y bebidas favoritas en un solo lugar. No te pierdas ni un momento.</p>
        <button>Descargar la App</button>
      </section>

      <section className="organizando-evento">
        <div className="organizando-content">
          <h2>¿Estás organizando un evento?</h2>
          <p>Podemos ayudarte a crear una experiencia inolvidable. ¡Empecemos!</p>
          <a href="/contacto">
          <button>Empezar</button></a>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
