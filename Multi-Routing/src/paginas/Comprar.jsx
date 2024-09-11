import { Navigate, useNavigate, useParams } from "react-router-dom"
import data from "../datos/data"
import types from "../contexto/types"
import { useContext } from "react"
import Contexto from "../contexto/Contexto"

export const Comprar = () => {
    const {nombre} = useParams()

    //Aca obtengo el destino encontrado por el usuario asi lo muestro en pantalla
    const destinoEncontrado = data.find(dato => dato.nombre === nombre)

    //Aca lo que hago es que al tocar el boton "volver" que esta a la hora de comprar una excursion vuelvo a la pagina a la que estaba 
    const navegacion = useNavigate()
    const volver = () => {
        navegacion(-1)
    }


    const {dispatch2, contratacion,setSumaTotal,sumaTotal} = useContext(Contexto)
    const encontrado = contratacion.find(objeto => objeto.sitio==nombre)

    //En las funciones anular y contratar genero la logica de lo que habira que hacer que es basicamente
    //que a la hora de contratar le paso el tipo action como "contratar" y a su vez como datos que es el payload
    //le paso el nombre de la excursion y el precio del destino encontrado que es el mostrado en pantalla
    //Ahora a la hora de anular lo que se hace es pasarle el action "anular" con el nombre asi en el provider se elimina
    //Añadiendo que a la hora de contratar ya voy calculando el total y en anular voy restando al total
    const contratar = () => {
        setSumaTotal (sumaTotal+destinoEncontrado.precio)
        const action = {
            type:types.contratar,
            payload:{nombre:nombre,precio:destinoEncontrado.precio}
        }
        dispatch2(action)
    }
    const anular = () => {
        setSumaTotal (sumaTotal-destinoEncontrado.precio)
        const action = {
            type:types.anular,
            payload:{nombre:nombre}
        }
        dispatch2(action)
        
    }
    const imagen = `/images/${destinoEncontrado.imagen}`
    //Si no encuentra el destino entonces te manda a una webPage predeterminada la cual es No
    if(!destinoEncontrado){
        return <Navigate to ="/no" />
    }
    return (
    <>
    <h1 className="turismoLugar">{nombre}</h1>

    <div className="servicios">{destinoEncontrado.servicio}</div>

    <div className="imagenGrande">

        <img src={imagen} alt = "foto" />

        {(!encontrado) &&<button className="boton contratar" onClick={contratar}>Contratar</button>}

        {(encontrado) &&<button className="boton anular" onClick={anular}>Anular</button>}

        <div className="precio">{destinoEncontrado.precio}$</div>

        <button className = "volver" onClick={volver}>Volver</button>

    </div>
    </>
  )
}
