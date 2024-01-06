import { useDispatch } from 'react-redux'

import { filterChange } from '../reducers/filterReducer'

const Filter = (props) => {
  const dispatch = useDispatch()

  const setFilter = (event) => {
    event.preventDefault()
    dispatch(filterChange(event.target.value.toLowerCase()))
  }

  return (
    <div>
      filter
      <input onChange={(event) => setFilter(event)} />
    </div>
  )
}

export default Filter
