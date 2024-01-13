import { createSlice } from '@reduxjs/toolkit'

import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    create(state, action) {
      state.push(action.payload)
    },
    update(state, action) {
      const changedAnecdote = action.payload
      return state.map(anecdote =>
        anecdote.id !== changedAnecdote.id ? anecdote : changedAnecdote
      )
    },
    setAll(state, action) {
      return action.payload
    }
  }
})

export const { create, update, setAll } = anecdoteSlice.actions

export const initialiseAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAll(anecdotes))
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.create(content)
    dispatch(create(newAnecdote))
  }
}

export const voteAnecdote = (anecdote) => {
  return async dispatch => {
    const votedAnecdote = await anecdoteService.update({
      ...anecdote,
      votes: anecdote.votes + 1
    })
    dispatch(update(votedAnecdote))
  }
}

export default anecdoteSlice.reducer