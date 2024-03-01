import React from 'react'
import './index.css'

const Footer = () => {
  return (
    <div className='footer container'>
      <div className="company">
        <h3>Company</h3>
        <ul>
          <li>About us</li>
          <li>Services</li>
          <li>Privacy Policy</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="gethelp">
        <h3>Get Help</h3>
        <ul>
          <li>FAQ</li>
          <li>Shopping</li>
          <li>Return</li>
          <li>Orders</li>
          <li>Payment Options</li>
        </ul>
      </div>

      <div className="onlineshop">
        <h3>Online Shop</h3>
        <ul>
          <li>Download</li>
          <li>Changelog</li>
          <li>Versions</li>
        </ul>
      </div>

    </div>
  )
}

export default Footer
