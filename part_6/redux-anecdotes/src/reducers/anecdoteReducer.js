import anecdotesServices from '../services/anecdotes'

const AnecdoteReducer = (state = [], action) => {

  switch (action.type) {
  case 'ADD_VOTE': {
    const id = action.data.id
    const anecdoteToChange = state.find((a) => a.id === id)
    const changeAnecdote = {
      ...anecdoteToChange,
      votes: action.data.votes
    }
    return state.map(a => a.id !== id ? a : changeAnecdote)
  }

  case 'ADD_ANECDOTE': {
    return state.concat(action.data)
  }

  case 'INIT_ANECDOTE': {
    return action.data
  }
  default:
    return state
  }

}

export const addVote = (data) => {
  return async (dispatch) => {
    const newAnecdote = await anecdotesServices.update(data)
    dispatch({
      type: 'ADD_VOTE',
      data: newAnecdote
    })
  }
}
export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdotesServices.create(content)
    dispatch({
      type: 'ADD_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const initialAnecdotes = (data) => {
  return {
    type: 'INIT_ANECDOTE',
    data,
  }
}

export default AnecdoteReducer