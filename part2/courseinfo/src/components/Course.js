import React from "react";
import { Header } from "./Header";
import { Content } from "./Content";
import { Total } from "./Total";

const Course = ({ course }) =>
  course.map(item => (
      <>
       {console.log(item)}
      <Header name={item.name} />
      <Content parts={item.parts} />
      <Total parts={item} />
    </>
  ));

export default Course;

