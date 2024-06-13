import React from 'react';
import '/components.css';

const tempFutura = ({ data, temperatura }) => {
  return (
    <div>
      <h3>{data}</h3>
      <p>Temperatura: {temperatura}°C</p>
    </div>
  );
};

export default tempFutura;
