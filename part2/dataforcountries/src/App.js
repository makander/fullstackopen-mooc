import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
 

  const [countries, setCountries] = useState([]);
  const [filterCountries, setFilter] = useState([]);
  const [country, setCountry] = useState(null)
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then((res) => {
      console.log(res.data);
      setCountries(res.data);
    });
  }, []);

  const getWeather = (capital) => {
    axios.get(`http://api.weatherstack.com/current?access_key=5d391f360d0979ba6171bf50dfd4e6b5&query=${capital}`).then((res) => {
      console.log(res.data)
      if (res.data.error) {
        console.log('error')
      } else {
        setWeather(res.data);
      }
    }
    ).catch(err => console.log(err));
  }


  
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    const filtred = countries.filter((item) =>
      item.name.includes(e.target.value)
    );
    console.log(filtred);
    //console.log(land)
    setFilter(filtred);
    setCountry(null)
  };

  const ShowCountry = (data) => {
    
    return (<div>
      <h1>{data.name}</h1>
      <p>Capital: {data.capital}</p>
      <p>Population: {data.population}</p>
      <p>Languages:</p>
      <ul>
       {data.languages.map((data) => (
        <li key={data.nativeName}>{data.name}</li>
        ))} 
      </ul>
      <img style={{ width: 200 }} src={data.flag} />

    </div>)
  }


  const handleShowInfoClick = (item) => {
    setCountry(item)
    getWeather(item.capital)
  }
 
  const DisplayWeather = () => {
    debugger;
    return weather !== null ? (<div>
      <p>Temperatur: {weather.current.temperature}</p>
      <img src={weather.current.weather_icons[0]} />
      <p>{weather.current.wind_speed} </p>
    </div>) : ''
  }
  

  const SearchResult = () => {
    return (
      <div>
        {filterCountries.length > 10
          ? 'to many results'
          : filterCountries.length < 10 && filterCountries.length > 1
          ? filterCountries.map((item) => (  
            <p>{item.name}
              <button onClick={() => handleShowInfoClick(item)} >show</button>
              
              </p>
            ))
          : filterCountries.length === 1
              ? filterCountries.map((item) => (
            setCountry(item),
            getWeather(item.capital)
            ))
          : ''}
      </div>
    );
  };

  return (
    <div className="App">
      Find countries: <input onChange={handleSearch} />
      <SearchResult />
      {country !== null ? ShowCountry(country) : ''}
    <DisplayWeather />
    </div> 
  );
}

export default App;
