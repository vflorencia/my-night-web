import React from 'react';
import './EventDetail.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { events } from './events';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';

export default function EventDetail() {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const { id } = useParams();
  const evento = events.find(event => event.id === parseInt(id));

  if (!evento) {
    return <div>Evento no encontrado</div>;
  }

  return (
    <>
    <div className="evento-navbar">
        <Navbar />
      </div>
    
    <div className="detalles-evento">

      <div className='blob'>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%" gradientTransform="rotate(287 0.5 0.5)">
            <stop offset="0%" stop-color="#a154bs"></stop>
            <stop offset="100%" stop-color="#5c648a"></stop>
          </linearGradient>
        </defs>
        <path fill="url(#gradient)" stroke="none" stroke-width="0" >
          <animate attributeName='d'
          dur="10000ms"
          repeatCount="indefinite"
          values='M77.5,66.5Q69,83,50.5,82.5Q32,82,20.5,66Q9,50,21,35.5Q33,21,53.5,14.5Q74,8,80,29Q86,50,77.5,66.5Z; 
          M75.5,62Q79,74,66.5,74Q54,74,43.5,77Q33,80,22,72Q11,64,19,53Q27,42,29,30Q31,18,43,18.5Q55,19,60.5,28Q66,37,69,43.5Q72,50,75.5,62Z;
          M79.5,63.5Q82,77,70,85Q58,93,46.5,84.5Q35,76,26,69Q17,62,13.5,48.5Q10,35,21,27.5Q32,20,43,24Q54,28,62,30.5Q70,33,73.5,41.5Q77,50,79.5,63.5Z;
          M77,57Q66,64,60.5,72Q55,80,43.5,80.5Q32,81,25,71.5Q18,62,18,50Q18,38,25.5,29.5Q33,21,45.5,13Q58,5,67,16.5Q76,28,82,39Q88,50,77,57Z'>
          </animate>
        </path>
      </svg>
      </div>
    
      <div className="evento-info">
        <div className="evento-imagen">
          <img src={evento.image} alt={evento.name} />
        </div>
        <div className="evento-descripcion">
          <h2>Descripción del Evento</h2><br/>
          <p>{evento.description}</p>
        </div>
      </div>
      <div className="evento-detalles">
        <h1>{evento.name}</h1>
        <p>Fecha: {evento.date.toLocaleDateString()}</p>
        <p>Hora: {evento.date.toLocaleTimeString()}</p>
        <p>Lugar: {evento.location}</p>
        <div className="precio">
          <p>Precio: ${evento.price}</p>
          <button onClick={() => navigate(`/transbank`, { state: { evento } })}>COMPRAR</button>
        </div>
        <div className="precio">
          <p>Aca va mas info</p>
        </div>
        <div className="precio">
          <p>Aca va mas info</p>
        </div>
        <div className="precio">
          <p>Aca va mas info</p>
        </div>
        <div className="precio">
          <p>Aca va mas info</p>
        </div>
        <div className="precio">
          <p>Aca va mas info</p>
        </div>
      </div>
    </div>
    </>
  );
};