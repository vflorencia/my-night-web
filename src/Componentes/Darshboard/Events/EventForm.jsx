// EventForm.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EventForm = ({ onSubmit, initialValues }) => {
  const [eventData, setEventData] = useState({
    price: 0,
    date: '',
    name: '',
    description: '',
    image: '',
  });

  useEffect(() => {
    if (initialValues) {
      setEventData(initialValues);
    }
  }, [initialValues]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(eventData);
  };

  return (

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre del evento"
          value={eventData.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Precio"
          value={eventData.price}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          value={eventData.date}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Descripción"
          value={eventData.description}
          onChange={handleChange}
        ></textarea>
        <input
          type="text"
          name="image"
          placeholder="URL de la imagen"
          value={eventData.image}
          onChange={handleChange}
        />
        <button type="submit">OK</button>
      </form>

  );
};

export default EventForm;
