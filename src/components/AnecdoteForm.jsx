import { useField } from '../hooks'
import { useNavigate } from 'react-router-dom'

const AnecdoteForm = (props) => {
  const navigate = useNavigate()

  const [content, resetContent] = useField('text', 'content')
  const [author, resetAuthor] = useField('text', 'author')
  const [info, resetInfo] = useField('url', 'info')

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

  const handleReset = (event) => {
    event.preventDefault()
    resetContent()
    resetAuthor()
    resetInfo()
  }

  return (<>
    <h2>create a new anecdote</h2>
    <form>
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
      <button onClick={handleSubmit}>create</button>
      <button onClick={handleReset}>reset</button>
    </form>
  </>)
}

export default AnecdoteForm