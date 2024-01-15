import React, { useEffect, useState } from 'react';
import './Events.css';
import { Link } from 'react-router-dom';
import { events } from "./events"
import { useDispatch, useSelector } from 'react-redux';
import { getAllTickets } from '../../redux/actions';


export default function Events() {

  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');
  const dispatch = useDispatch()
  const evento = useSelector((state) => state.tickets)
  console.log("evento", evento);

  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortEvents = (a, b) => {
    if (sortBy === 'price-lowest') {
      return a.price - b.price;
    } else if (sortBy === 'price-highest') {
      return b.price - a.price;
    }
    return 0;
  };

  filteredEvents.sort(sortEvents);
  console.log(filteredEvents)

  useEffect(() => {
   dispatch(getAllTickets())
  }, [])
  
  
  return (
    <div className="eventos-section">
    <h1>Eventos</h1>
    <p>
      Explora nuestra emocionante lista de eventos en [Nombre del Boliche]. Desde conciertos en vivo hasta noches temáticas únicas, tenemos algo para todos los amantes de la música y la diversión. ¡Asegúrate de no perderte las experiencias más emocionantes de la ciudad!
    </p>

    <div className="eventos-controls">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          className="search-input"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <select
          className="sort-select"
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
        >
          <option value="">Ordenar por</option>
          <option value="price-lowest">Precio más bajo</option>
          <option value="price-highest">Precio más alto</option>
        </select>
      </div>
      <div className="eventos-list2">
      {filteredEvents.length === 0 ? (
        <div className="noevents">
          <p>Lo sentimos.</p>
          <p>No tenemos un evento registrado con el nombre que intentas buscar.</p>
        </div>
         
        ) : (filteredEvents.map(event => (
          <Link to={`/eventos/${event.id}`} key={event.id} className="evento-card2">
            <img src={event.image} alt="" />
            <div className="evento-card-content">
              <h3>{event.name}</h3>
              <p>Fecha: {event.date.toLocaleDateString()} | Hora: {event.date.toLocaleTimeString()}</p>
              <p className="evento-card-price">Precio: ${event.price}</p>
            </div>
          </Link>
        ))
      )}
      </div>
      <section className="organizando-evento">
        <div className="organizando-content">
          <h2>Mantente Actualizado</h2>
          <p>No te pierdas los próximos eventos y experiencias emocionantes. Sigue nuestro calendario y asegúrate de reservar tus entradas con anticipación en My Night.</p>
          <button>Descargar la App</button>
        </div>
      </section>
  </div>
);
};
