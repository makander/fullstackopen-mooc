import React from 'react';

export const Total = ({ parts }) => {
  const total = parts.parts.reduce((prev, current) => 
  prev + current.exercises, 0
  )
  return <p>Total number of excercies: {total}</p>
};
