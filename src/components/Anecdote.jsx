import {
  useNotificationDispatch,
  setNotification
} from '../reducers/NotificationContext'

const Anecdote = ({ anecdote, handleVote }) => {
  const dispatch = useNotificationDispatch()

  const handleClick = () => {
    handleVote(anecdote)
    setNotification(dispatch, `anecdote '${anecdote.content}' voted`, 5)
  }

  return (<>
    <div>
      {anecdote.content}
    </div>
    <div>
      has {anecdote.votes}
      <button onClick={handleClick}>vote</button>
    </div>
  </>)
}

export default Anecdote