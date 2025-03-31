import React from 'react';
import './Search.css';

const Search = ({ valueInput, getWeather }) => {

  const handleSubmit = (e) => {
    e.preventDefault(); 
    getWeather(); 
  };

  return (
    <form className="SearchContainer" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="cidade">Cidade</label>
        <input ref={valueInput} type="text" placeholder='Pesquise aqui pela sua cidade...' name='cidade' />
      </div>

      <button type="submit">
        <img src="src/assets/lupa.svg" alt="Lupa" />
      </button>
    </form>
  );
};

export default Search;
