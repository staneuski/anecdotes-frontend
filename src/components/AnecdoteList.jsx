import { useDispatch, useSelector } from 'react-redux'
import { vote as voteAnecdote } from '../reducers/anecdoteReducer'

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
  const anecdotes = useSelector(({ filter, anecdotes }) => {
    // console.log(anecdotes[0].votes)
    return filter !== ''
      ? anecdotes.filter(({ content }) =>
        content.toLowerCase().includes(filter))
      : anecdotes
  }).toSorted((lhs, rhs) => rhs.votes - lhs.votes)

  return (<>
    {anecdotes
      .map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => dispatch(voteAnecdote(anecdote.id))}
        />
      )
    }
  </>)
}

export default AnecdoteList
