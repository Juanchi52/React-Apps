import { reyes } from './reyes'

export function Actividad2 (){
    const eliminar = (e) => {
        e.target.parentNode.remove()
    }
    return(
    <div className = "reyes">
        {
            reyes.filter(valor => !valor.nombre.includes("g")).map(rey => <div key={rey.nombre}>{rey.nombre} <button onClick={eliminar}>borrar</button> </div> )
        }
    </div>

    )
    
}