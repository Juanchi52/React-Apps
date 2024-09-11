import { useContext } from "react"
import Contexto from "../contexto/Contexto"
import types from "../contexto/types"
import { Link } from "react-router-dom"

const MiViaje = () => {
    const {contratacion, dispatch2, referencia,setSumaTotal,sumaTotal} = useContext(Contexto)

    //Lo que hago aca es basicamente la pagina que le aparece al usuario a la hora de pagar, que le aparece el destino, precio, su referencia y si quiere anularlo
    return (
    <>
    <section className="ruta">
        <h3>Lugares a Visitar:</h3>
        {(contratacion.lenght<1) &&
        <div className="aviso">
            Todavia no has contratado ninguna excursion <br/>
            Haz click en {<Link to= "/cp"> Capital y Patagonia </Link>}
            o {<Link to= "/no"> Norte y Este </Link>} para ver nuestras ofertas
        </div>}
        {contratacion.map(mapa => 
            <div key = {mapa.sitio}>
                <button className="boton anularRuta"onClick={
                    () => {
                        setSumaTotal(sumaTotal-mapa.precio)
                        dispatch2({
                            type:types.anular,
                            payload:{nombre:mapa.sitio}
                        })
                    }
                }>Anular</button>
                {mapa.sitio}({mapa.precio})
            </div>)}
            <h3>Total a pagar: {sumaTotal}$</h3>
            <h3>Referencia: {referencia}</h3>
    </section>
    </>
  )
}

export default MiViaje