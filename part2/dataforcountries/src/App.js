import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then((res) => {
      console.log(res.data);
      setCountries(res.data);
    });
  }, []);

  const [countries, setCountries] = useState([]);
  const [filterCountries, setFilter] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    const filtred = countries.filter((item) =>
      item.name.includes(e.target.value)
    );
    console.log(filtred);
    //console.log(land)
    setFilter(filtred);
  };

  const SearchResult = () => {
    return (
      <div>
        {filterCountries.length > 10
          ? 'to many results'
          : filterCountries.length < 10 && filterCountries.length > 2
          ? filterCountries.map((item) => (
              <li key={item.id}>
                {item.name}
                <button>show</button>
              </li>
            ))
          : filterCountries.length === 1
          ? filterCountries.map((item) => (
              <div>
                <h1>{item.name}</h1>
                <p>Capital: {item.capital}</p>
                <p>Population: {item.population}</p>
                <p>Languages:</p>
                {item.languages.map((lang) => (
                  <li>{lang.name}</li>
                ))}
                <img src={item.flag} />
              </div>
            ))
          : ''}
      </div>
    );
  };

  return (
    <div className="App">
      Find countries: <input onChange={handleSearch} />
      <SearchResult />
    </div>
  );
}

export default App;
