/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider ({children}){
    const [cart,setCart] = useState([])

    const addToCart = product => {
        const productCartIndex = cart.findIndex(item => item.id === product.id)

        if(productCartIndex>=0) {
            const newCart =structuredClone(cart)
            newCart[productCartIndex].quantity +=1
            return setCart(newCart)
        }

        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity:1
            }
        ]))

    }
    const clearCart = () => {
        setCart([])
    }

    return(
        <CartContext.Provider value = {{
            cart,
            addToCart,
            clearCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}