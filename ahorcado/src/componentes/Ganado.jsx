import React from 'react'
import { useNavigate } from 'react-router-dom'

const Ganado = () => {
  const navegacion = useNavigate()
  return (
    <>
    <h1>Has ganado, mantenes tu cabeza sobre los hombros</h1>
    <div className='imagen'>
      <img src="../assets/el_ahorcado1.png" alt='iamgen ganadora'/>
    </div>
    <button onClick={()=> navegacion("/juego/")}>Volver a jugar</button>
    </>
  )
}

export default Ganado