import React, { useContext } from 'react'
import { CartContext } from './Context'

function Cart() {
    const cartContext = useContext(CartContext)
    return (
        <div>
            <h2>Items: {cartContext.count}</h2>
        </div>
    )
}

export default Cart
