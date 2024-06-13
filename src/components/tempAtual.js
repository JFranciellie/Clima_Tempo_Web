import React from 'react';
import '/components.css';

const tempAtual = ({ temperature: temperatura, cidade }) => {
  return(
    <div>
    <h2> Previsão do Tempo para {cidade} </h2>
      <p>Temperatura: {temperatura}°C</p>
    </div>
  )
};

export default tempAtual;
