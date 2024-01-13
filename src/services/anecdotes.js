import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes' // '/api/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (anecdote) => {
  const response = await axios.post(baseUrl, { content: anecdote, votes: 0 })
  return response.data
}

export default { getAll, create }