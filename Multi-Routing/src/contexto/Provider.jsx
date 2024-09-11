import { useReducer, useState } from 'react'
import Contexto from './Contexto'
import { miReducer } from './miReducer'
import types from './types'
import { miReducer2 } from './MiReducer2'

const init =() => {
    const user = localStorage.getItem("valor")
    return {
        logeado:!!user, // Si exise o no
        usuario:user 
    }
    
}
const valorInicial = []
const Provider = ({children}) => {
    const [autentificacion, dispatch] = useReducer(miReducer, {}, init)
    const [contratacion,dispatch2] = useReducer(miReducer2, valorInicial)
    const [referencia, setReferencia] = useState("")
    const [sumaTotal, setSumaTotal] = useState(0)
     
    //Aca hacemos la funcion de logearse cargando el usuario en el local storage
    const logearse = (user='') => {
        const action = {
            type:types.login,
            payload:user
        }
        localStorage.setItem("valor", user)
        dispatch(action)
    }

    //Aca hacemos la funcion de deslogearse borrando el local storage
    const deslogearse = () => {
        const action = {
            type:types.logout,
            payload:null
        }
        localStorage.removeItem("valor") 
        dispatch(action)
    }

    //Aca voy pasando todo lo que necesito para ir haciendo la web, desde el login, como la suma de precios como el contratar una excursion a nivel app
    return (
    <Contexto.Provider value={{
        ...autentificacion, 
        logearse, 
        deslogearse,
        dispatch2, 
        contratacion,
        referencia,
        setReferencia,
        sumaTotal,
        setSumaTotal
        }}>
        {children}
    </Contexto.Provider>
    )
}

export default Provider