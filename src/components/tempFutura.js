import React from 'react';
import './style.css';

const TempFutura = ({ data, temperatura }) => {
  return (
    <div>
      <h3>{data}</h3>
      <p>Temperatura: {temperatura}°C</p>
    </div>
  );
};

export default TempFutura;
