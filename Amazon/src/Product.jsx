import React from 'react'
import './index.css'

const Product = (props) => {
    return (
        <div className="productCard">
            <div className='cardImgDiv'>
                <img src={props.imgPath} className='cardImg' />
            </div>
            <h2>{props.name}</h2>
            <h4>{props.desc}</h4>
            <h3 className='priceTag'>{props.price}</h3>
            <div className='productCardButtons'>
                <button>Buy Now</button>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product