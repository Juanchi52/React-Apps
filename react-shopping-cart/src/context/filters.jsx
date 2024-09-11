/* eslint-disable react/prop-types */
import {  createContext, useState } from "react";

//1. creo el Contexto
export const FiltersContext = createContext()

//2.Creo el Provider para proveer el contexto
export function FiltersProvider ({children}){
    const [filters, setFilters] = useState({
        categoy:'all',minPrice:0
    })


    return(
        <FiltersContext.Provider value = {{
            filters,
            setFilters
        }}>
        {children}
        </FiltersContext.Provider>
    )
}