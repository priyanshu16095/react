import React from 'react'
import './index.css'
import clothes from '../img/random/clothes.png'
import electronics from '../img/random/electronics.png'
import airplane from '../img/random/airplane.png'
import bed from '../img/random/bed.png'
import grocery from '../img/random/grocery.png'
import iphones from '../img/random/iphones.png'
import shoes from '../img/random/shoes.png'
import laptop from '../img/random/laptop.webp'
import clothesTemplate from '../img/random/clothesTemplate.webp'

const Home = () => {
  return (
    <>
    <div className='home'>
        <div className="top">
          <div className="category">
            <figure><img src={grocery} /><figcaption>Grocery</figcaption></figure>
            <figure><img src={iphones}  style={{width:'5rem'}} /><figcaption>Mobiles</figcaption></figure>
            <figure><img src={clothes} /><figcaption>Fashion</figcaption></figure>
            <figure><img src={electronics} /><figcaption>Electronics</figcaption></figure>
            <figure><img src={bed} /><figcaption>Home & Furniture</figcaption></figure>
            <figure><img src={airplane} /><figcaption>Travel</figcaption></figure>
            <figure><img src={shoes}  style={{width:'6.5rem'}} /><figcaption>Shoes</figcaption></figure>
          </div>
        </div>
    </div>
    </>
  )
}

export default Home
