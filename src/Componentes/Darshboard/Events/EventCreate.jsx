import React from 'react';
import { useDispatch } from 'react-redux';
import EventForm from './EventForm';
import { useNavigate } from 'react-router-dom';
import { createEvent } from '../../../redux/actions';

const EventCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    dispatch(createEvent(formData));
    navigate("/dashboard/events")
  };

  return (
    <div>
      <h2>Añadir un nuevo Evento</h2>
      <EventForm onSubmit={handleSubmit} initialValues={{}} />
    </div>
  );
};

export default EventCreate;
