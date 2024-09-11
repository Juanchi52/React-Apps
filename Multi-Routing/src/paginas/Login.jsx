import { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import Contexto from '../contexto/Contexto'

const Login = () => {
  const {logearse, setReferencia} = useContext(Contexto)
  const navegacion = useNavigate()
  
  //Una vez nos logeamos entramos a las main pages para elegir nuestros destinos
  const login = () => {
    logearse()
    navegacion('/',{replace:true})
    
  }
  const registro = (e) => {
    setReferencia(e.currentTarget.value)
  }
  return (
    <>
      <section className='login'>
        <h1>Visita tu sueño</h1>
        <label htmlFor='referencia' >Referencia</label>
        <input id='referencia' onChange={registro} placeholder='Referencia de tu billete' autoFocus autoComplete='off'/>      
        <button className='botonRegistro' onClick={login}>Login</button>
        </section>
    </>
  )
}

export default Login