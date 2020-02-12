import React from 'react';

const FilterForm = ({ persons, filter, setFilter }) => {
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

export default FilterForm;
