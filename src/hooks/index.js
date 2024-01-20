import { useState } from 'react'

export const useField = (type, name) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const reset = () => {
    setValue('')
  }

  return [{ type, name, value, onChange }, reset]
}

export const useNotification = (initialState) => {
  const [notification, setNotification] = useState(initialState)

  const notify = (message) => {
    setNotification(message)
    setTimeout(() => setNotification(null), 5000)
  }

  return [notification, notify]
}