import React from 'react';
import { Part } from './Part';

export const Content = ({ parts }) => 
parts.map((item) => {
  return (<Part part={item} />)
      
});
