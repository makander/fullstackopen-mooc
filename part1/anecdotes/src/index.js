import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = props => {
  const [selected, setSelected] = useState(0);
  const [point, setPoint] = useState(null);


    //const arr = new Array(props.anecdotes.length).fill(0);
    //return setPoint(arr)

  const randomAnecdote = () => {
      setSelected(Math.floor(Math.random() * 6));
      if (point.length) {
          const arr = new Array(props.anecdotes.length).fill(0)
          return setPoint(arr)
      } 
  };

    const addVote = () => {
      
  }
    
  return (
    <div>
      {props.anecdotes[selected]}
      <br />
          <Button text={"Vote"} />
          {selected}
      <Button text={"Next anecdote"} onClick={randomAnecdote} />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));

/* const anecs = [
    {
      anecdote: "If it hurts, do it more often",
      point: 0
    },
    {
      anecdote: "Adding manpower to a late software project makes it later!",
      point: 0
    },
    {
      anecdote:
        "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      point: 0
    },
    {
      anecdote:
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      point: 0
    },
    {
      anecdote: "Premature optimization is the root of all evil.",
      point: 0
    },
    {
      anecdote:
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      point: 0
    }
  ]; */
