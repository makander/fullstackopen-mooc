import React from 'react';

export const Total = (props) => {
  console.log(props, 'in total');
  return (
    <p>
      Number of exercises:{' '}
      {props.parts.parts[1].exercises +
        props.parts.parts[2].exercises +
        props.parts.parts[0].exercises}
    </p>
  );
};
