/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const Context = createContext()

export const Datos = ({children}) => {
    const [color, setColor] = useState("silver")
    return (
        <Context.Provider value = {{color, setColor }}>
            {children}
        </Context.Provider>

    )
}
