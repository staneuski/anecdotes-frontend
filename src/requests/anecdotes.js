import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes' // '/api/anecdotes'

export const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export const create = async (newAnecdote) => {
  const response = await axios.post(baseUrl, newAnecdote)
  return response.data
}
