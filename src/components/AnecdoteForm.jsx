import { useField } from '../hooks'
import { useNavigate } from 'react-router-dom'

const AnecdoteForm = (props) => {
  const navigate = useNavigate()

  const content = useField('text', 'content')
  const author = useField('text', 'author')
  const info = useField('url', 'info')

  const handleSubmit = (event) => {
    event.preventDefault()
    props.addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0
    })
    navigate('/')
  }

  return (<>
    <h2>create a new anecdote</h2>
    <form onSubmit={handleSubmit}>
      <div>
        content
        <input {...content} />
      </div>
      <div>
        author
        <input {...author} />
      </div>
      <div>
        url for more info
        <input {...info} />
      </div>
      <button>create</button>
    </form>
  </>)
}

export default AnecdoteForm