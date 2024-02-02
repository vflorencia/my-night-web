import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Canceled({ message }) {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Operación Cancelada</h2>
      <p>{message}</p>
      <button onClick={()=> navigate('/')}>Volver</button>
    </div>
  );
}
