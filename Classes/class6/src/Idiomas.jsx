import React, { useContext } from 'react'
import { Contexto } from './Contexto/Conexto'
import { Provider } from './Contexto/Provider'

function Idiomas() {
    const {setAlumno, alumno} = useContext(Contexto)
    const cambio = (posicion) => {
        setAlumno(
            alumno.map((dato,indice) => 
            indice ===3
            ?{...dato, idioma:posicion}
            :{...dato}
            )
        )
    }

    const cambio1 = () => {
        cambio(0)
    }
    const cambio2 = () => {
        cambio(1)
    }
    const cambio3 = () => {
        cambio(2)
    }

  return (
    <div className='idiomas'>
        <div  onClick={cambio1} className='bandera'>
            <img src='../images/spain.jpg'/>
        </div>
        <div onClick={cambio2} className='bandera'>
            <img src='../images/uk.png'/>
        </div>
        <div onClick={cambio3} className='bandera'>
            <img src='../images/francia.png'/>
        </div>
    </div>
  )
}

export default Idiomas