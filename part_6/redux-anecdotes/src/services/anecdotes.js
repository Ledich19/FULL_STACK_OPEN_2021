import axios from 'axios'
const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (data) => {
  const anecdote = {
    content: data,
    votes: 0,
  }
  const response = await axios.post(baseUrl, anecdote, {
    new: true
  })
  return response.data
}

const update = async (data) => {
  const anecdote = {
    content: data.content,
    votes: data.votes + 1,
  }
  const url = `${baseUrl}/${data.id}`
  const response = await axios.put(url, anecdote)
  return response.data
}

export default {
  getAll,
  create,
  update
}