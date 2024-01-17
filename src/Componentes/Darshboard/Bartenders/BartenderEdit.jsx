import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllBartenders, updateBartender } from '../../../redux/actions';
import BartenderForm from './BartenderForm';

const BartenderEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const bartenders = useSelector((state) => state.bartenders);
  const [currentBartender, setCurrentBartender] = useState({});

  useEffect(() => {
    dispatch(getAllBartenders());
  }, [dispatch]);

  useEffect(() => {
    const foundBartender = bartenders.find((b) => b.id === Number(id));
    setCurrentBartender(foundBartender || {});
  }, [bartenders, id]);

  const handleUpdate = (formData) => {
    dispatch(updateBartender(id, formData));
    navigate("/dashboard/bartenders");
  };

  return (
    <div>
      <h2>Editar Datos</h2>
      <BartenderForm onSubmit={handleUpdate} initialValues={currentBartender} />
    </div>
  );
};

export default BartenderEdit;

