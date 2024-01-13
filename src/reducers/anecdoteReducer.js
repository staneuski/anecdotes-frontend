import { createSlice } from '@reduxjs/toolkit'

import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    create(state, action) {
      state.push(action.payload)
    },
    vote(state, action) {
      const id = action.payload
      const anecdoteToChange = state.find(n => n.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : changedAnecdote
      )
    },
    setAll(state, action) {
      return action.payload
    }
  }
})

export const { create, vote, setAll } = anecdoteSlice.actions

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

export default anecdoteSlice.reducer