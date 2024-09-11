import { useState } from 'react'
import './App.css'

function App() {
  const reyesGodos = [
    {
      nombre:'Ataulfo',
      aficion: 'comer toros sin pelar',
    },{
      nombre:'Recesvinto',
      aficion:'leer a Hegel en arameo',
    },{
      nombre:'Teodorico',
      aficion:'la Cria del escarabajo en almibar',
    }
  ]
  const [contador, setCondador] = useState(0)
  const [mensaje,setMensaje] = useState()

  const mostrar = () => {
    setCondador(contador+1)
    if(contador+1>=reyesGodos.length){
      setCondador(0)
    }
    setMensaje(<h2>La aficion principal <span className = 'rojo'>{reyesGodos[contador].nombre}</span> es <span className = 'verde'>{reyesGodos[contador].aficion}</span></h2>)
  }

  return (
    <>
    <button onClick={mostrar}>Mostrar</button>  
    <div className = "caja">{mensaje}</div>
    </>
  )
}

export default App
