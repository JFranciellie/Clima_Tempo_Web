import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import TempAtual from '.components/TempAtual';
import TempFutura from '.components/TempFutura';
import Pesquisa from './pesquisa.js';
import './style.css';

const App = () => {
  const [dados, setDados] = useState(null);

  const handleSearch = (data) => {
    setDados(data);
  };

  return (
    <div className="app">
      <h1>Previsão do Tempo</h1>
      <Pesquisa onSearch={handleSearch} />
      {dados && (
        <>
          <TempAtual cidade={dados.city.name} temperatura={dados.list[0].main.temp} />
          <div className="temp-futura">
            {dados.list.slice(1, 4).map((item, index) => (
              <TempFutura
                key={index}
                data={new Date(item.dt * 1000).toLocaleDateString()}
                temperatura={item.main.temp}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
