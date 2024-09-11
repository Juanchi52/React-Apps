import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import Contexto from '../contexto/Contexto'

export const RutasPublicas = ({children}) => {
    const {logeado} = useContext(Contexto)
    return (!logeado)
    ? children
    :<Navigate to = "/CP" />
}
