import React, { useContext } from 'react'
import { globalProvider } from './context/Context'
const Search = () => {
  const { inputSearch } = useContext(globalProvider)
  const [input, setInput] = inputSearch
  return (
    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
  )
}
export default Search
