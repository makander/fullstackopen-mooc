import React, { useState } from "react";
import './index.css';
import './App.css'

const tableStyle = {
  tableLayout: 'fixed',
  width: '100%'
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Stats = ({ value, text }) => (
  <table style={tableStyle}>
    <tbody>
      <tr>
        <td>{text}: </td>
        <td>{value}</td>
      </tr>
    </tbody>
  </table>
);

const calcAverage = (good, bad) => good - bad;

const totalVotes = (good, bad, neutral) => good + bad + neutral;

const positiveFeedback = (good, bad, neutral) => {
  const percentage = Math.round((good / totalVotes(good, bad, neutral)) * 100);
  return <p>{percentage}%</p>;
};
//const all = () => good + bad

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text={"Good"}></Button>
      <Button onClick={() => setNeutral(neutral + 1)} text={"Netural"}></Button>
      <Button onClick={() => setBad(bad + 1)} text={"Bad"}></Button>
      <Stats text={"Good"} value={good} />
      <Stats text={"Neutral"} value={neutral} />
      <Stats text={"Bad"} value={bad} />
      <Stats text={"Total"} value={totalVotes(good, bad, neutral)} />
      <Stats text={"Average"} value={calcAverage(good, bad)} />
      <Stats text={"Positive"} value={positiveFeedback(good, bad, neutral)} />
    </div>
  );
};

export default App;
