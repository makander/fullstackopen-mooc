import React from 'react';
import { Part } from './Part';

export const Content = (props) => {
  console.log(props, 'in content');
  return (
    <div>
      <Part part={props.parts.parts[0]} />
      <Part part={props.parts.parts[1]} />
      <Part part={props.parts.parts[2]} />
    </div>
  );
};
