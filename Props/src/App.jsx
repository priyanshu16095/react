import React from 'react'
import Product from './Product'
import iphoneImg from './iphones.png'
import Cart from './Cart'

function App() {
  return (
    <div className='buttons'>
      <Product img={iphoneImg} productName="iPhone 15" price="$1000" />
      <Product img={iphoneImg} productName="iPhone 14" price="$920" />
      <Cart />
    </div>
  )
}

export default App
