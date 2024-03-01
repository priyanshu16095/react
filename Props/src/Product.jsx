import React from 'react'
import { CartContext } from './Context'
import { useContext } from 'react'

const Product = (props) => {
    const cartContext = useContext(CartContext)
    return (
        <div className='product'>
            <img src={props.img} className='productImg' />
            <h2>{props.productName}</h2>
            <h3>{props.price}</h3>
            <div className="buttons">
                <h5>Add to Cart</h5>
                <button className='btn' onClick={(e) => {cartContext.setCount(cartContext.count - 1)}}>-</button>
                <button className='btn' onClick={(e) => {cartContext.setCount(cartContext.count + 1)}}>+</button>
            </div>
            <button>Buy Now</button>
        </div>
    )
}

export default Product
