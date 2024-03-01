import React, { createContext, useState } from "react";

export const CartContext = createContext()

export const CartContextProvider = (props) => {
    const[count, setCount] = useState(0)
    return (
        <CartContext.Provider value={{count, setCount}}>
            {props.children}
        </CartContext.Provider>
    )
}