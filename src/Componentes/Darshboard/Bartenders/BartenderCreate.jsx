import React from 'react';
import { useDispatch } from 'react-redux';
import BartenderForm from './BartenderForm';
import { useNavigate } from 'react-router-dom';
import { createBartender } from '../../../redux/actions';

const BartenderCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    dispatch(createBartender(formData));
    navigate("/dashboard/bartenders")
  };

  return (
    <div>
      <h2>Añadir un nuevo Bartender</h2>
      <BartenderForm onSubmit={handleSubmit} initialValues={{}} />
    </div>
  );
};

export default BartenderCreate;
