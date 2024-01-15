// Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventForm from './EventForm'
import EventDetails from './EventDetails'

const Event = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Obtener la lista de Events al cargar el componente
    axios.get('/tickets')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error('Error fetching Events:', error);
      });
  }, []);

  const handleEventCreated = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const handleEventUpdated = (updatedEvent, deletedEventId = null) => {
    if (deletedEventId) {
      setEvents(events.filter(event => event.id !== deletedEventId));
    } else {
      const updatedEvents = events.map(event => {
        if (event.id === updatedEvent.id) {
          return updatedEvent;
        }
        return event;
      });
      setEvents(updatedEvents);
    }
  };

  return (
    <div>
      <EventForm onEventCreated={handleEventCreated} />
      <h2>Lista de Events</h2>
      {events.map(event => (
        <EventDetails
          key={event.id}
          event={event}
          onEventUpdated={handleEventUpdated}
        />
      ))}
    </div>
  );
};

export default Event;
