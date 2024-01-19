import { Link } from 'react-router-dom'

const AnecdoteList = ({ anecdotes }) => (<>
  <h2>Anecdotes</h2>
  <ul>
    {anecdotes.map(anecdote =>
      <li key={anecdote.id}>
        <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link>
      </li>
    )}
  </ul>
</>)

export default AnecdoteList