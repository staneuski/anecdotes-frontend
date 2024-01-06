import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'

const Anecdote = ({ anecdote, handleClick }) => {

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

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state =>
    state.filter !== ''
      ? state.anecdotes.filter(({ content }) =>
        content.toLowerCase().includes(state.filter))
      : state.anecdotes
  )

  return (<>
    {anecdotes
      .sort((lhs, rhs) => rhs.votes - lhs.votes)
      .map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => dispatch(vote(anecdote.id))}
        />
      )
    }
  </>)
}

export default AnecdoteList
