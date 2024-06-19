import React, { useState } from 'react';
import './style.css';

const Pesquisa = ({ onSearch }) => {
  const [cidade, setCidade] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setCidade(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (cidade.trim() !== '') {
      try {
        const response = await fetch(`2a1fd2fbcbed03002cf67a61605e5ca9https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&appid=${chave}&units=metric`);
        if (!response.ok) {
          throw new Error('Cidade não encontrada. Por favor, tente novamente.');
        }
        const data = await response.json();
        onSearch(data);
        setError('');
      } catch (error) {
        setError(error.message);
      }
      setCidade('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite o nome da cidade..."
        value={cidade}
        onChange={handleChange}
      />
      <button type="submit">Buscar</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Pesquisa;
