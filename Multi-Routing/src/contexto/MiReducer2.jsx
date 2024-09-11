import types from './types'


//Esta funcion lo que hace es manejar el hecho de poder contratar una excursion guardando su nombre y su precio
export const miReducer2 = (state = [], action) => {
    switch (action.type){
        case types.contratar:
            return [
                ...state,{sitio:action.payload.nombre,precio:action.payload.precio} //cojo todo el array del estado con los 3 puntos
            ]
        case types.anular:
            return (
                state.filter(cosa => cosa.sitio !==action.payload.nombre)
            )
        default:
            return state
    }   
}
