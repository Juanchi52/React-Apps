import { Destino } from '../paginas/Destino'
import data from './data'


//Creamos el listado de todas las excursiones cuando le llega "cp" o "no" que se envia como prop desde CP.jsx y NO.jsx que dps le aplicamos el grid y asi generamos las columnas con su nombre,foto, descripcion
const CrearListado = ({zona}) => { 
    const listado = data.filter(destino => destino.zona === zona) 
  return (
    <>
        <section className='lista'>
            {listado.map(dato => 
                (<Destino key = {dato.nombre}{...dato}/>)
                )}
        </section>
    </>
  )
}

export default CrearListado