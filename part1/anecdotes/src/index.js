import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = props => {
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(null)

  
  useEffect(() => {
    if (vote === null) {
      setVote(new Array(props.anecdotes.length).fill(0))
    }
  })

  const randomAnecdote = () => {
      setSelected(Math.floor(Math.random() * 6));
  };

  const addVote = () => {
    let updateVote = [...vote]
    updateVote[selected] += 1;
    setVote([...updateVote])
  }

  const anecdoteWithHigestVote = () => {
    
    let highestVote = Math.max(...vote)
    let i = vote.indexOf(Math.max(...vote));
    let anecdotedote = props.anecdotes[i]

    return (<div>
      <h1>This has anecdote with most votes: </h1>
      <p> {anecdotedote} which has: {highestVote} votes </p>
    </div>)
  }
    
  return (
    <div>
      <h1>Anecdotedote of the day</h1>
      {props.anecdotes[selected]}
      <br />
      {vote ? 'this anecdotedote has ' + vote[selected] + ' votes' : null}
     
      <br /> <br />
      <Button text={"Vote"} onClick={addVote}/>
      <Button text={"Next anecdote"} onClick={randomAnecdote} />
      
      {vote ? anecdoteWithHigestVote() : null}
      
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