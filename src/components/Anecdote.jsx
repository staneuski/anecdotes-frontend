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

export default Anecdote