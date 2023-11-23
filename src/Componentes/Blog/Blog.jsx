import React from 'react';
import './Blog.css';


export default function Blog() {
  return (
    <div className="blog-section">
      <h1>Blog</h1>
      <p>
        Bienvenido a nuestro blog, donde encontrarás noticias emocionantes, actualizaciones de eventos y contenido relevante para los amantes de la música y la diversión en [Nombre del Boliche].
      </p>

      <div className="latest-entries">
        <h2>Últimas Entradas</h2>

        <div className="blog-entry">
          <h3>[Título de la Entrada]</h3>
          <p>Publicado el [Fecha]</p>
          <p>
            ¡Noticias Calientes! [Nombre del Boliche] Anuncia su Evento de Apertura
          </p>
          <p>
            ¡Estamos emocionados de anunciar oficialmente la gran inauguración de [Nombre del Boliche]! Después de meses de preparación, finalmente abrimos nuestras puertas para brindarte la mejor experiencia en entretenimiento en vivo de la ciudad.
          </p>
          {/* Continuar con el contenido de la entrada */}
        </div>

        {/* Agregar más entradas aquí */}
      </div>
      
      <h2>Mantente Informado</h2>
      <p>
        No te pierdas nuestras últimas noticias y actualizaciones. Suscríbete a nuestro boletín para recibir contenido exclusivo y estar al tanto de los eventos más emocionantes en [Nombre del Boliche].
      </p>
    </div>
  );
};