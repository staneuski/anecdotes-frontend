import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

import Anecdote from './components/Anecdote'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import {
  getAll as getAnecdotes,
  update as updateAnecdote
} from './requests/anecdotes'

const App = () => {
  const queryClient = useQueryClient()

  const updateAnecdoteMutation = useMutation({
    mutationFn: updateAnecdote,
    onSuccess: (updatedAnecdote) => {
      console.log(updatedAnecdote)
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
    }
  })
  const handleVote = (anecdote) => {
    updateAnecdoteMutation.mutate({ ...anecdote, votes: anecdote.votes + 1 })
  }

  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    refetchOnWindowFocus: false,
    retry: false
  })
  // console.log(JSON.parse(JSON.stringify(result)))
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
      {anecdotes
        .sort((lhs, rhs) => rhs.votes - lhs.votes)
        .map(anecdote =>
          <Anecdote
            key={anecdote.id}
            anecdote={anecdote}
            handleClick={() => handleVote(anecdote)}
          />
        )}
    </div>
  )
}

export default App
