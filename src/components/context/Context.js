import React, { createContext, useState, useEffect } from 'react'

export const globalProvider = createContext()

const Context = ({ children }) => {
  const [data, setData] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("")
  const [filterData, setFilterData] = useState([]);
  const [input, setInput] = useState('')
  useEffect(() => {
    setFilterData(data.filter(find => find.message.toLowerCase().includes(input.toLowerCase())))
  }, [input])

  const getData = async () => {
    const response = await fetch('./dataFull.json');
    const result = await response.json();
    return result
  }

  useEffect(() => {
    getData().then(res => setData(res)).catch(console.error)
  }, [setData])

  return (
    <globalProvider.Provider value={{
      appData: [data, setData],
      inputSearch: [input, setInput],
      filteredData: [filterData, setFilterData],
      modalState: [modalIsOpen, setIsOpen],
      typeModal: [modalType, setModalType]
    }}>
      {children}
    </globalProvider.Provider>
  )
}

export default Context
