import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then(res => {
      console.log(res.data)
      setCountries(res.data);
   })
  }, [])

  const [countries, setCountries] = useState([])
  const [filterCountries, setFilter] = useState([])

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    const filtred = countries.filter(item => item.name.includes(e.target.value))
    console.log(filtred)
    //console.log(land)
    setFilter(filtred)
      

  }

  const SearchResult = () => {
    return <div>{filterCountries.length > 10 ? 'to many results' : filterCountries.map(item => <li key={item.id}>{item.name}</li>)}</div>
  }

  return (
    <div className="App">
      Find countries: <input onChange={handleSearch} />
      <ul></ul>
      <SearchResult />
    </div>

  );
}

export default App;
