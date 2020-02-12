import React from 'react';

const Person = ({ person, newFilter }) => {
  if (newFilter.length) {
    const filteredUsers = person.map((person) => {
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
    const allPersons = person.map((person) => (
      <li key={person.name}>
        Name: {person.name} - {person.number}
      </li>
    ));
    return <ul>{allPersons}</ul>;
  }
};

export default Person;
