import { useEffect, useState } from "react"
import { getRandomFact } from "../services/facts"

export function useCatFact () {
    const [fact,setFact] = useState()

    const refreshRandomFact = () => {
        getRandomFact().then(newfact => setFact(newfact))//recupera los nuevos datos y actualizar el estado interno 
    }
    //para recuperar la cita al cargar la pagina
    useEffect(refreshRandomFact, [])

    return {fact, refreshRandomFact}

}