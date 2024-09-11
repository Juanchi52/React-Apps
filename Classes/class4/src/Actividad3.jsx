import { reyes } from './reyes'

export function Actividad3 (){
    //const eliminar = (e) => {
    //    e.target.parentNode.remove()
    //}
    const resultado3 = reyes.find(valor => valor.nombre.substring(0,1) == "e" || valor.nombre.substring(0,1) == "E")
    return(
    <div className = "reyes">
      {resultado3 == undefined ?"No se ha encontrado" : resultado3.nombre}
    </div>

    )  
}