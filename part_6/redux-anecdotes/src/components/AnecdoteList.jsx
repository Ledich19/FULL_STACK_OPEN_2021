import React from 'react'
import { addVote } from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {

  const anecdotes = useSelector(state => {
    return state.filter
      ? state.anecdotes.filter(a => a.content.toUpperCase().includes(state.filter.toUpperCase()))
      : state.anecdotes
  })

  const anecdotesShow = [...anecdotes].sort((a, b) => b.votes - a.votes)
  const dispatch = useDispatch()

  const vote = (anecdote) => {
    dispatch(addVote(anecdote))
    dispatch(setNotification(`you vote ${anecdote.content}`, 5))
  }

  return (
    <div>
      {anecdotesShow.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>)
}

export default AnecdoteList