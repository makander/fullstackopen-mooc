import React from "react";

const Persons = ({ persons, newFilter }) => {
  console.log(newFilter);

  if (newFilter.length) {
    const filteredUsers = persons.map(person => {
      if (person.name.toLowerCase() === newFilter.toLowerCase()) {
        return (
          <li key={person.name}>
            Name: {person.name} - {person.number}
          </li>
        );
      }
    });
      return <ul>{filteredUsers}</ul>;
      
  } else {
    const allPersons = persons.map(person => (
      <li key={person.name}>
        Name: {person.name} - {person.number}
      </li>
    ));
    return <ul>{allPersons}</ul>;
  }
};

export default Persons;
