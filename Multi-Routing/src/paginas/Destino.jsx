import { useContext } from "react"
import { Link } from "react-router-dom"
import Contexto from "../contexto/Contexto"

export const Destino = ({nombre, imagen, situacion}) => {
  const ruta = `/images/${imagen}`
  const {contratacion} = useContext(Contexto)
  const encontrado = contratacion.find(objeto => objeto.sitio === nombre)
  //Generamos el destino en si para luego mostrarlo en la main page de ambos lugares 
    return (
    <>
    <div className="destino">
        <div className = "nombre">{nombre}</div>
        <div className="situacion">{situacion}</div>
        <img src={ruta} alt = "foto" />
        <div className="flex">
            <Link to = {`/destino/${nombre}`}>Mas info</Link>
            {(encontrado) && <div className="circulo"></div>}
        </div>
    </div>
    </>
  )
}
