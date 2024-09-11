import React from 'react'
import Contexto from './Contexto'
import { useReducer } from 'react'
import { miReducer } from './miReducer'
import types from './types'

const init = () => {
    const valor = localStorage.getItem('estado')
    return{
        estado:!!valor
    }
}

const Provider = ({children}) => {
    const logearme = (user = '') => {
        const action = {
            type:types.login
        }
        localStorage.setItem('estado',true)
        dispatch(action)
    }
    const deslogearme = () => {
        const action = {
            type:types.logout
        }
        localStorage.removeItem('estado')
        dispatch(action)

    }
    const [logeado,dispatch] = useReducer(miReducer, {}, init)
  return (
    <Contexto.Provider value={{
        ...logeado,
        logearme,
        deslogearme
    }}>
        {children}
    </Contexto.Provider>
  )
}

export default Provider