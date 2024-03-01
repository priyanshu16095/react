import React, { useState } from 'react'
import logo from '../img/logo/flipkartLogo.png'
import cartIcon from '../img/logo/Cart.png'
import './index.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const[bar, setBar] = useState("")

  return (
    <>
    <div className="navbar">
      <div className="title">
        <ul>
          <li><img src={logo} width={'50rem'} /></li>
          <li>Flipkart</li>
        </ul>
      </div>
      <div className="items">
        <ul>
          <input type="search" placeholder='Search for Products, Brands and More' />
          <li>
            <Link to={"/"} style={bar==="home"?{textDecoration:'none', color:'#107bd4'}:{textDecoration:'none', color:'black'}} onClick={() => setBar("home")} >Home</Link>
          </li>
          <li>
            <Link to={"/offers"} style={bar==="offers"?{textDecoration:'none', color:'#107bd4'}:{textDecoration:'none', color:'black'}} onClick={() => setBar("offers")} >Offers</Link>
          </li>
          <li>
            <Link to={"/login"} style={bar==="login"?{textDecoration:'none', color:'#107bd4'}:{textDecoration:'none', color:'black'}} onClick={() => setBar("login")} >Log in</Link>
          </li>
          <li>
            <div className='cart'><Link to={"/cart"}><img src={cartIcon} width={'30rem'}cd  /></Link></div>
          </li>
        </ul>
      </div>
    </div>
    <hr />
    </>
  )
}

export default Navbar
