import React, { useState } from 'react'

const Header = ({title}) => <h2>{title}</h2>;
const Button = (props) => {
  return <button onClick={props.handleClick} >{props.text}</button>
  };
const Statistics = ({good,neutral,bad}) => {
  return <>
    <div>{good}</div>
    <div>{neutral}</div>
    <div>{bad}</div>
  </>
}

function setValue() {

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header title={'give feedback'} />
      <Button text={'good'} handleClick={()=> setGood(good+1)} />
      <Button text={'neutral'} handleClick={()=> setNeutral(neutral+1)} />
      <Button text={'bad'} handleClick={()=> setBad(bad+1)} />
      <Header title={'statictics'} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App