import React, { useState } from "react";

const Statistics = ({ good, bad, neutral }) => {
  if (good || bad || neutral) {
    return (
      <div>
        <p>Good: {good}</p>
        <p>Bad: {bad}</p>
        <p>Neutral: {neutral}</p>
        <p>All: {totalVotes(good, bad, neutral)}</p>
        <p>Average: {calcAverage(good, bad)} </p>
        <p>Postivie: {positiveFeedback(good, bad, neutral)} % </p>
      </div>
    );
  }

  return (
    <div>
      <h1>
        <p>No Statistics Given</p>
      </h1>
    </div>
  );
};

const calcAverage = (good, bad) => good - bad;

const totalVotes = (good, bad, neutral) => good + bad + neutral;

const positiveFeedback = (good, bad, neutral) =>
  Math.round((good / totalVotes(good, bad, neutral)) * 100);

//const all = () => good + bad

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
