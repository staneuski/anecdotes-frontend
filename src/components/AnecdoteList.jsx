const AnecdoteList = ({ anecdotes }) => {
  const vote = (id) => {
    console.log('vote', id)
    // store.dispatch({ type: 'VOTE' })
  }

  return (<>
    {anecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote.id)}>vote</button>
        </div>
      </div>
    )}
  </>)
}

export default AnecdoteList