import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllEvents, updateEvent } from '../../../redux/actions';
import EventForm from './EventForm';

const EventEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const events = useSelector((state) => state.events);
  const [currentEvent, setCurrentEvent] = useState({});

  useEffect(() => {
    dispatch(getAllEvents());
  }, [dispatch]);

  useEffect(() => {
    const foundEvent = events.find((b) => b.id === Number(id));
    setCurrentEvent(foundEvent || {});
  }, [events, id]);

  const handleUpdate = (formData) => {
    dispatch(updateEvent(id, formData));
    navigate("/dashboard/events");
  };

  return (
    <div>
      <h2>Editar Datos</h2>
      <EventForm onSubmit={handleUpdate} initialValues={currentEvent} />
    </div>
  );
};

export default EventEdit;

