import React from 'react';
import PersonService from './services/PersonService';

const PersonForm = ({
  persons,
  setNewName,
  newName,
  setNumber,
  newNumber,
  setPersons,
}) => {
  const newPerson = (e) => {
    debugger;
    e.preventDefault();

    const person = {
      name: newName,
      number: newNumber,
    };

    const checkDuplicates = persons.filter((p) => p.name === person.name);

    if (checkDuplicates.length === 0 || checkDuplicates === undefined) {
      PersonService.createPerson(person)
        .then(setPersons(persons.concat(person)))
        .then(setNewName(''), setNumber(''));
    } else {
      const duplicateDialog = window.confirm(
        `${person.name} already exists, add new number?`
      );

      if (duplicateDialog) {
        PersonService.updatePerson(checkDuplicates[0].id, person)
          .then((response) => {
            setPersons(
              persons.map((p) =>
                p.id !== checkDuplicates[0].id ? p : response
              )
            );
          })
          .then(setNewName(''), setNumber(''));
      }
    }
  };

  const handleChangePerson = (e) => {
    setNewName(e.target.value);
  };

  const handleNumber = (e) => {
    e.preventDefault();
    setNumber(e.target.value.trim());
  };

  return (
    <form onSubmit={newPerson}>
      <div>
        name: <input onChange={(e) => handleChangePerson(e)} value={newName} />
      </div>

      <div>
        number: <input onChange={(e) => handleNumber(e)} value={newNumber} />
      </div>
      <button type="submit">add</button>
      <div>debug: {newName}</div>
    </form>
  );
};

export default PersonForm;
