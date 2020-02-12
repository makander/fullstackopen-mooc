import React from 'react';
import PersonService from './services/PersonService';

const DisplayPersons = ({ persons, filter, setPersons }) => {
  const filteredPersons = persons.filter((p) =>
    p.name.includes(filter) ? p : ''
  );

  const handleDelete = (data) => {
    window.confirm(`Rly delete, ${data.name}?`)
      ? PersonService.deletePerson(data.id).then(
          setPersons(persons.filter((p) => p.id !== data.id))
        )
      : console.log('lulz');
  };

  const personData = (data) => {
    return (
      <li key={data.id}>
        Name: {data.name} - {data.number}
        <button onClick={() => handleDelete(data)}>Delete</button>
      </li>
    );
  };

  const displayFilteredPersons = filteredPersons.map((p) => personData(p));

  const allPersons = persons.map((p) => personData(p));

  return (
    <div>
      <ul>{filter.length ? displayFilteredPersons : allPersons}</ul>
    </div>
  );
};

export default DisplayPersons;
