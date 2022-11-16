import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const CreateNew = async (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.createAnecdote(anecdote)
    props.setNotification(`new anecdote '${anecdote}'`, 5)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={CreateNew}>
        <div><input name='anecdote' /></div>
        <button type='submit'>create</button>
      </form>
    </div >
  )
}

const mapDispatchToProps = {
  createAnecdote,
  setNotification,
}

const ConnectAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)
export default ConnectAnecdoteForm