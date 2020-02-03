import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Persons from './components/Persons';
import axios from 'axios';

const App = () => {

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(res => {
      setPersons(res.data);
    })
    
  }, [])

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("");
  const [newNumber, setNumber] = useState("");
  const [newFilter, setFilter] = useState("");

  return (
    <div>
      <h2>PhoneBook</h2>
      <Filter persons={persons} filter={newFilter} setFilter={setFilter} />
      <h2>Add a new person:</h2>
      <PersonForm
        persons={persons}
        setNewName={setNewName}
        newName={newName}
        setNumber={setNumber}
        newNumber={newNumber}
        setPersons={setPersons}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} newFilter={newFilter} />
    </div>
  );
};
export default App;

ReactDOM.render(<App />, document.getElementById("root"));
