import React from 'react'
import { PRODUCTS } from './Products'
import iphone from '../img/random/iphone.jpg'
import './index.css'

const Offers = () => {
  return (
    <div className="offers">

        <div className='offersFlex'> { 
          PRODUCTS.map((product) => 
          <div className='itemBox'>
            <img src={iphone} />
            <h2>{product.name}</h2>
            <h4>{product.price}</h4>
            <div className="buttons">
              <button>Buy</button>
              <button>Add to Cart</button>
            </div>
          </div> 
          )}
        </div>

    </div>
  )
}

export default Offers
