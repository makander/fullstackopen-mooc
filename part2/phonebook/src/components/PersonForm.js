import React from "react";

const PersonForm = ({
  persons,
  setNewName,
  newName,
  setNumber,
  newNumber,
  setPersons
}) => {
  const newPerson = e => {
    e.preventDefault();

    persons.forEach(person => {
      if (person.name.toLowerCase() !== newName.toLowerCase()) {
        console.log(person.name, "person name");
        console.log(newName, "new name");
        setPersons(persons.concat({ name: newName, number: newNumber }));
        setNumber("");
        setNewName("");
      } else {
        alert(`${newName}, already exists`);
        setNumber("");
        setNewName("");
        console.log("är i elsen");
        return;
      }
    });
  };

  const handleChangePerson = e => {
    const name = e.target.value;
    console.log(name);
    setNewName(e.target.value);
  };

  const handleNumber = e => {
    e.preventDefault();
    setNumber(e.target.value.trim());
  };

  return (
    <form onSubmit={newPerson}>
      <div>
        name: <input onChange={handleChangePerson} value={newName} />
      </div>

      <div>
        {" "}
        number: <input onChange={handleNumber} value={newNumber} />
      </div>
      <button type="submit">add</button>
      <div>debug: {newName}</div>
    </form>
  );
};
export default PersonForm;
