import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { globalProvider } from './context/Context';
const Task = () => {
  const { appData } = useContext(globalProvider)
  const { id } = useParams();
  const [data] = appData;
  const [pageData, setPageData] = useState([])
  useEffect(() => {
    setPageData(data.filter(item => item.id === id))
  }, [])
  return (
    <div>
      {pageData?.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item?.title}</h1>
            <section>
              <article>
                <p>{item?.details}</p>
              </article>
            </section>
          </div>
        )
      })}
    </div>
  )
}

export default Task
