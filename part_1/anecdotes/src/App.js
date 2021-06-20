import React, { useState } from 'react'

const Button = ({handleClick,text}) => {
  return <button onClick={handleClick} >{text}</button>
};
const Title = ({title}) => <h2>{title}</h2>;
const Anecdote = ({text,votes}) => {
  return  <>
    <div>{text}</div>
    {votes ? <div>has: {votes} votes</div> : ''}
    </>
  };
  
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
  
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const [bestAnecdotIndex, setBestAnecdotIndex] = useState(null);

  function newAnecdot() {
    const random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
  }

  function increaseVote(selected) {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setBestAnecdotIndex(newVotes.indexOf( Math.max.apply(null, newVotes)));
    setVotes(newVotes);
  }
  
  return (
    <>
    <Title title={'Anecdote of the day'} />
    <Anecdote text={anecdotes[selected]}  votes={votes[selected]} />
    <Button text={'vote'} handleClick={() => increaseVote(selected)} />
    <Button text={'next anecdote'} handleClick={() => newAnecdot()} />
    <Title title={'Anecdote with most votes'} />
    <Anecdote text={anecdotes[bestAnecdotIndex]}  votes={votes[bestAnecdotIndex]} />
  </>
  )
}

export default App