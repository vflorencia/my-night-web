
import React, { useState } from 'react';
import axios from 'axios';

const EventDetails = ({ event, onEventUpdated }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [eventData, setEventData] = useState(event);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleUpdate = () => {
    // Actualizar el Event
    axios.put(`/tickets/${ticket.id}`, eventData)
      .then(response => {
        // Finalizar el modo de edición y actualizar el event
        setIsEditing(false);
        onEventUpdated(response.data);
      })
      .catch(error => {
        console.error('Error updating event:', error);
      });
  };

  const handleDelete = () => {
    // Eliminar el event
    axios.delete(`/tickets/${ticket.id}`)
      .then(() => {
        // Llamar a la función del padre para indicar que se eliminó el event
        onEventUpdated(null, event.id);
      })
      .catch(error => {
        console.error('Error deleting event:', error);
      });
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="number"
            name="price"
            value={eventData.price}
            onChange={handleChange}
          />
          <input
            type="date"
            name="date"
            value={eventData.date}
            onChange={handleChange}
          />
          <input
            type="text"
            name="name"
            value={eventData.name}
            onChange={handleChange}
          />
          <textarea
            name="description"
            value={eventData.description}
            onChange={handleChange}
          ></textarea>
          <input
            type="text"
            name="image"
            value={eventData.image}
            onChange={handleChange}
          />
          <button onClick={handleUpdate}>Guardar</button>
        </div>
      ) : (
        <div>
          <h3>{event.name}</h3>
          <p>{event.description}</p>
          <img src={event.image} alt={event.name} />
          <button onClick={() => setIsEditing(true)}>Editar</button>
          <button onClick={handleDelete}>Eliminar</button>
        </div>
      )}
    </div>
  );
};

export default EventDetails;
