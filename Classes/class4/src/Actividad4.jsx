import { reyes } from './reyes'

export function Actividad4 (){
    //reyes.filter(valor => !valor.nombre.includes("g")).map(rey => <div key={rey.nombre}>{rey.nombre} <button onClick={eliminar}>borrar</button> </div> )
    //const resultado3 = reyes.find(valor => valor.nombre.substring(0,1) == "e" || valor.nombre.substring(0,1) == "E")
    const incrementar = (e) => {
    e.target.innerHTML = Number(e.target.innerHTML) + 1
    }

    return(
    <div className = "reyes">
      {
        reyes.filter(valorFiltro => 
            valorFiltro.vacasComidas >= 10 && valorFiltro.reinado >= 10).
            map(rey => 
            <>
            <div key={rey.nombre}>{rey.nombre} <div className = "contador" onClick={incrementar}>0</div></div>
            
            </>
            )
      }
    </div>
    )  
}