import React from 'react';

export const Part = (props) => {
  // console.log(props);
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};
