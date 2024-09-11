import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Contexto from '../context/Contexto'

export default function Login() {
    const {logearme} = useContext(Contexto)
    const navegacion = useNavigate()
    const login = () => {
        navegacion('/',{replace:true})
        logearme()
    }

  return (
    <>
        <div>Login</div>
        <button onClick={login}>Login</button>
    </>
  )
}
