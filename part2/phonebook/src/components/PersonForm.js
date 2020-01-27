import React from "react";

const PersonForm = ({ persons, setNewName, newName, setNumber, newNumber, setPersons }) => {
  const newPerson = e => {
    e.preventDefault();

    persons.filter(person =>
      person.name === newName
        ? alert(`${newName}, already exists`)
        : setPersons(persons.concat({ name: newName, number: newNumber }))
    );
      setNewName('')
      setNumber('')
  };

  const handleChangePerson = e => {
      setNewName(e.target.value);
  };

  const handleNumber = e => {
    e.preventDefault();
      setNumber(e.target.value);
      
  };

  return (
    <form onSubmit={newPerson}>
      <div>
              name: <input onChange={handleChangePerson} value={newName}/>
      </div>

      <div>
        {" "}
              number: <input onChange={handleNumber} value={newNumber}/>
      </div>
      <button type="submit">add</button>
      <div>debug: {newName}</div>
    </form>
  );
};
export default PersonForm;
