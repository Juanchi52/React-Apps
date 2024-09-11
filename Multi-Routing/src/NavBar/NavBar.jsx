import { useContext } from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import Contexto from '../contexto/Contexto'


//Con esta NavBar me voy manejando entre las diferentes multi-pages que serian el CP y NO y dps ir a viajes que es para ver la suma total de lo acumulado y elegido
const NavBar = () => {
    const {deslogearse} = useContext(Contexto)
    const navegacion = useNavigate()
    const logout = () => {
        deslogearse()
        navegacion ('/login', {replace:true})
    }
    return (
        <>
            <nav>
                <div>
                    <NavLink to='/cp'>Capital y Patagonia</NavLink>
                    <NavLink to='/no'>Norte y Este</NavLink>
                    <NavLink to='/viaje'>Mi viaje</NavLink>
                </div>
                <button className='boton Logout'onClick={logout}>Logout</button>
            </nav>
        </>
    )
}

export default NavBar