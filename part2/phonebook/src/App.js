import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PersonForm from './components/PersonForm';
import FilterForm from './components/FilterForm';
import DisplayPersons from './components/DisplayPersons';
import PersonService from './components/services/PersonService';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    PersonService.getPersons().then((res) => {
      setPersons(res);
    });
  }, [setNumber]);

  return (
    <div>
      <h2>PhoneBook</h2>
      <Notification message={message} status={status} />
      <FilterForm persons={persons} filter={filter} setFilter={setFilter} />
      <h2>Add a new person:</h2>
      <PersonForm
        persons={persons}
        setNewName={setNewName}
        newName={newName}
        setNumber={setNumber}
        newNumber={newNumber}
        setPersons={setPersons}
        setMessage={setMessage}
        setStatus={setStatus}
      />
      <h2>Numbers</h2>
      <DisplayPersons
        persons={persons}
        filter={filter}
        setPersons={setPersons}
        setMessage={setMessage}
        setStatus={setStatus}
      />
    </div>
  );
};
export default App;

ReactDOM.render(<App />, document.getElementById('root'));
