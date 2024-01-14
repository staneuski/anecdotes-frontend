import { useQuery } from '@tanstack/react-query'
import { getAll as getAnecdotes } from './requests/anecdotes'

import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'

const App = () => {


  const handleVote = (anecdote) => {
    console.log(anecdote)
  }

  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    refetchOnWindowFocus: false,
    retry: false
  })
  console.log(JSON.parse(JSON.stringify(result)))
  if ( result.isLoading )
    return <div>loading data...</div>
  else if ( result.isError )
    return <div>anecdote service not availiable due to problems in server</div>

  const anecdotes = result.data
  return (
    <div>
      <h3>Anecdote app</h3>
      <Notification />
      <AnecdoteForm />
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
