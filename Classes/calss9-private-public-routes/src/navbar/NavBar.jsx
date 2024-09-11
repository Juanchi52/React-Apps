import React from 'react'
import { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Contexto from '../context/Contexto'

const NavBar = () =>  {
  const {deslogearme} = useContext(Contexto)
  const navegacion = useNavigate()
  const login = () => {
    navegacion('/login', {replace:true})
    deslogearme()
  }
  return (
    <>
      <nav>
        <NavLink to='contenido1'>Contenido1</NavLink>
        <NavLink to='contenido2'>Contenido2</NavLink>
        <NavLink to='contenido3'>Contenido3</NavLink>
        <button onClick={login}>Logout</button>
      </nav>
    </>
  )
}

export default NavBar