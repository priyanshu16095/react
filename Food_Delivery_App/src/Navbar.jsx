import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='navbar container'>
        <div className='title'>
            <div><h2>FOOD<span className='col'>SHOP</span></h2></div>
            <div className='lines'>
               <div className="line"></div>
               <div className="line"></div>
               <div className="line"></div>
            </div>
        </div>
        <div className="items">
            <ul>
                <li>Snacks</li>
                <li>Starter</li>
                <li>Desserts</li>
            </ul>
        </div>
        
    </div>
    <hr />
    </>
  )
}

export default Navbar
