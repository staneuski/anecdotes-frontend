import { createContext, useReducer, useContext } from 'react'

const notificationReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW':
      return action.payload
    default:
      return state
  }
}

const NotificationContext = createContext()

export const NotificationContextProvider = (props) => {
  const [notification, notificationDispatch] =
    useReducer(notificationReducer, 0)

  return (
    <NotificationContext.Provider value={[notification, notificationDispatch]}>
      {props.children}
    </NotificationContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useNotificationValue = () => {
  const notificationAndDispatch = useContext(NotificationContext)
  return notificationAndDispatch[0]
}

// eslint-disable-next-line react-refresh/only-export-components
export const useNotificationDispatch = () => {
  const notificationAndDispatch = useContext(NotificationContext)
  return notificationAndDispatch[1]
}

// eslint-disable-next-line react-refresh/only-export-components
export const setNotification = (dispatch, message, timeout) => {
  dispatch({ type: 'SHOW', payload: message })
  setTimeout(() => dispatch({ type: 'SHOW', payload: null }), 1000 * timeout)
}

export default NotificationContext