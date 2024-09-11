import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [chiste, setChiste] = useState([])
  
  const otro =() => {
    const url = "https://api.icndb.com/jokes"
    const peticion = fetch (url)
    peticion
    .then(datos => datos.json())
    .then(lectura => lectura.value.map(chistes => setChiste(e => [...e,<div className = "caja" key = {chistes.id}>{chistes.id} {chistes.joke}</div>])))
    .catch(console.log)
  }

  useEffect (() => {
    otro()
  }, [])


  return (
    <>
    {chiste}
    </>
  )
}

export default App
