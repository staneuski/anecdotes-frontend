import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: null,
  reducers: {
    show(state, action) {
      return action.payload
    }
  }
})

export const { show, hide } = notificationSlice.actions

export const notify = (message) => {
  return dispatch => {
    dispatch(show(message))
    setTimeout(() => dispatch(show(null)), 5000)
  }
}

export default notificationSlice.reducer
