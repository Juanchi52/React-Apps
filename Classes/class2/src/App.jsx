import imagen0  from './images/rey_atanagildo.png'
import imagen1 from './images/rey_ataulfo.png'
import './App.css'
import { useRef } from 'react'

function App() {
  const cambio = 23.53
  const refCaja = useRef()

  function incrementar (e) {
  e.target.innerHTML = Number(e.target.innerHTML) + 1
  if(e.target.innerHTML >= 10){
    e.target.innerHTML = 1
  }
  if(e.target.innerHTML >= 8){
    e.target.style.backgroundColor = "red"
  }else{
    e.target.style.backgroundColor = "white"
  }
}

  const convertir = () => {
  refCaja.current.innerHTML=Number(refCaja.current.innerHTML) * cambio
 }

 const cambiar = (j) => {
  if(j.target.src.includes("atanagildo")){
    j.tarjet.src = imagen0
  }else {
    j.tarjet.src = imagen1
  }
  
 }

 const lectura = (e) =>{
  refCaja.current.innerHTML= e.target.value
 }

  return (
    <>
    <div ref = {refCaja} className = 'box' onClick={incrementar}>1</div>
    <button onClick={convertir}>Aceptar</button>
    <img onClick={cambiar} src = {imagen0}/>
    <input onChange={lectura} className = 'campo'/>
    </>
  )
}

export default App
