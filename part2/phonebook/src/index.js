import React, { useState } from "react";
import ReactDOM from "react-dom";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" }
  ]);
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
