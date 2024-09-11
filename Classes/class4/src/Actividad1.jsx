import { reyes } from './reyes'


export function Actividad1 (){
    //const resultado1 = reyes.map(valor => <div key={valor.nombre}>{valor.nombre} come {valor.vacasComidas} al dia</div>
    return(
        <div className = "reyes">
            {
                reyes.map(valor => (
                  <div className = "rey" key = {valor.nombre}>
                    <h3><span className='nombreRey'>{valor.nombre.toUpperCase()}</span> ha comido {valor.vacasComidas} en sus {valor.reinado} años de reinado</h3>
                    <img src = {`https://www.html6.es/img/rey_${valor.nombre.toLowerCase()}.png`}/>
                  </div>
                ))   
            }
        </div>
    )

}