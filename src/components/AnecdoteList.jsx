import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleClick }) => (
  <>
    <div>
      {anecdote.content}
    </div>
    <div>
      has {anecdote.votes}
      <button onClick={handleClick}>vote</button>
    </div>
  </>
)

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(({ filter, anecdotes }) =>
    filter !== ''
      ? anecdotes.filter(({ content }) =>
        content.toLowerCase().includes(filter))
      : anecdotes
  ).toSorted((lhs, rhs) => rhs.votes - lhs.votes)

  const handleClick = (anecdote) => {
    dispatch(voteAnecdote(anecdote))
    dispatch(notify(`you voted '${anecdote.content}'`))
  }

  return (<>
    {anecdotes
      .map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => handleClick(anecdote)}
        />
      )
    }
  </>)
}

export default AnecdoteList
