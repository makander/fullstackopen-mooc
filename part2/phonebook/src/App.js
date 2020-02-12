import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PersonForm from './components/PersonForm';
import FilterForm from './components/FilterForm';
import DisplayPersons from './components/DisplayPersons';
import PersonService from './components/services/PersonService';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    PersonService.getPersons().then((res) => {
      setPersons(res);
    });
  }, []);

  return (
    <div>
      <h2>PhoneBook</h2>
      <FilterForm persons={persons} filter={filter} setFilter={setFilter} />
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
      <DisplayPersons
        persons={persons}
        filter={filter}
        setPersons={setPersons}
      />
    </div>
  );
};
export default App;

ReactDOM.render(<App />, document.getElementById('root'));
