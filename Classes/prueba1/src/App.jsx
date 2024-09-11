import './App.css'
import imagen1 from './images/rey_atanagildo.png'
import imagen2 from './images/rey_ataulfo.png'
import imagen3 from './images/rey_ervigio.png'
import imagen4 from './images/rey_incognito.png'

function App() {
  let nombres = ["Atanagildo", "Leo", "Sise"]

  const cambiarNombre = (e) => {
    if(e.target.innerHTML == "Visto"){
      e.target.innerHTML= ''
    }else{
      e.target.innerHTML='Visto'
    }
  }

  const cambiar = (j) => {
    if(j.target.src.includes('incognito')){
      j.tarjet.style.visibility='hidden'
    }else {
      j.tarjet.src = imagen4
    }
    j.target.parentNode.style.backgroundColor = "white"
  }
  return (
    <div className = 'contenedor'>
      <div className = 'box'>
        <img onClick={cambiar} src = {imagen1}/>
        <div onClick = {cambiarNombre} className = 'nombre'>{nombres[0]}</div>
      </div>

      <div className = 'box'>
        <img onClick={cambiar} src = {imagen2}/>
        <div onClick = {cambiarNombre} className = 'nombre'>{nombres[1]}</div>
      </div>

      <div className = 'box'>
        <img onClick={cambiar} src = {imagen3}/>
        <div onClick = {cambiarNombre} className = 'nombre'>{nombres[2]}</div>
      </div>
    </div>
  )
}

export default App
