const Anecdote = ({ anecdote }) => (<>
  <h2>{anecdote.content}</h2>
  <div>
    has {anecdote.votes} votes
    <br/>
    for more info see <a href={anecdote.info}>{anecdote.info}</a>
  </div>
</>)

export default Anecdote