import React, { useState } from 'react'

const Header = ({title}) => <h2>{title}</h2>;
const Button = ({handleClick,text}) => {
  return <button onClick={handleClick} >{text}</button>
  };
const Display = ({text,parameter}) => {
  return <div>{text}: {parameter}</div>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad;
  const average = (good - bad)/all;
  const positive = good/all*100

  return (
    <div>
      <Header title={'give feedback'} />

      <Button text={'good'} handleClick={()=> setGood(good + 1)} />
      <Button text={'neutral'} handleClick={()=> setNeutral(neutral + 1)} />
      <Button text={'bad'} handleClick={()=> setBad(bad + 1)} />

      <Header title={'statictics'} />
      <Display  text={'good'} parameter={good} />
      <Display  text={'neutral'} parameter={neutral} />
      <Display  text={'bad'} parameter={bad} />
      <Display  text={'all'} parameter={all} />
      <Display  text={'average'} parameter={average} />
      <Display  text={'positive'} parameter={positive} />
    </div>
  )
}

export default App
