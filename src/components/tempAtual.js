import React from 'react';
import './style.css';

const TempAtual = ({ temperatura, cidade }) => {
  return(
    <div>
      <h2> Previsão do Tempo para {cidade} </h2>
      <p>Temperatura: {temperatura}°C</p>
    </div>
  );
};

export default TempAtual;
