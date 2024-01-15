// TicketForm.js
import React, { useState } from 'react';
import axios from 'axios';

const TicketForm = ({ onTicketCreated }) => {
  const [ticketData, setTicketData] = useState({
    price: 0,
    date: '',
    name: '',
    description: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicketData({ ...ticketData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear un nuevo ticket
    axios.post('/tickets/create', ticketData)
      .then(response => {
        // Limpiar el formulario después de crear el ticket
        setTicketData({
          price: 0,
          date: '',
          name: '',
          description: '',
          image: '',
        });

        // Llamar a la función del padre para indicar que se creó un nuevo ticket
        onTicketCreated(response.data);
      })
      .catch(error => {
        console.error('Error creating ticket:', error);
      });
  };

  return (
    <div>
      <h2>Crear Ticket</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="price"
          placeholder="Precio"
          value={ticketData.price}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          value={ticketData.date}
          onChange={handleChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Nombre del evento"
          value={ticketData.name}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Descripción"
          value={ticketData.description}
          onChange={handleChange}
        ></textarea>
        <input
          type="text"
          name="image"
          placeholder="URL de la imagen"
          value={ticketData.image}
          onChange={handleChange}
        />
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default TicketForm;
