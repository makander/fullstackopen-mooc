import React from 'react';

const Filter = ({ persons, filter, setFilter }) => {
  const handleFilter = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  return (
    <div>
      Search: <input onChange={handleFilter} />
    </div>
  );
};

export default Filter;
