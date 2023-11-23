import React from 'react';
import QRCode from 'react-qr-code';

export default function EntradaQR({ entrada }) {
  // Convierte los datos de la entrada en una cadena JSON
  const entradaData = JSON.stringify(entrada);

  return (
    <div>
      {/* Renderiza el código QR con los datos de la entrada */}
      <QRCode value={entradaData} />

      {/* Aquí puedes agregar más detalles de la entrada si es necesario */}
      <h3>{entrada.name}</h3>
      <p>Fecha: {entrada.date.toLocaleDateString()} | Hora: {entrada.date.toLocaleTimeString()}</p>
      <p>Precio: ${entrada.price}</p>
    </div>
  );
}
