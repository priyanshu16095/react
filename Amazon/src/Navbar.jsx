import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cartIcon from '../img/icons/Cart.png'

const Navbar = function() {
    const[bar, setBar] = useState()
    return (
        <div className='navbar'>
            <div className="navItems">
                <h2><span>Amazon</span></h2>
                <Link to={"/"} className='bar'>Home</Link>
                <Link to={"/items"} className='bar'>Items</Link>
                <Link to={"/login"} className='bar'>Login</Link>
            </div>
            <div className='navItems'>
                <input type="text" placeholder='Search' />
                <Link to={"/cart"}><img src={cartIcon} width={'30rem'}/></Link>
            </div>
        </div>
    )
}

export default Navbar