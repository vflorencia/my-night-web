import React from 'react';

export default function Canceled({ message }) {

  return (
    <div>
      <h2>Operación Cancelada</h2>
      <p>{message}</p>
    </div>
  );
}
