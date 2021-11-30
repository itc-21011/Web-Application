import React, { useState, useEffect } from 'react'
import './App.css'

const App = props => {
  const [data, setData] = useState([])
  const uri = 'https://pokeapi.co/api/v2/pokemon/'
  useEffect(() => (
    window.fetch(uri)
      .then(res => res.json())
      .then(json => json.results)
      .then(data => setData(data))
  ), [])
  return (
    <>
      <ul>
        {data.map(v => (
          <li key={v.url}>{v.name}</li>
        ))}
      </ul>
    </>
  )
}
export default App
