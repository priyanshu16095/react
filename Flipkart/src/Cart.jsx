import React, { useState } from 'react'
import Login from './Login '

const Cart = () => {
    const[isOpen, setIsOpen] = useState(false)
    function toggle() {
        setIsOpen((prev) =>!prev)
    }
    
    return (
        <div className='App'>
            { isOpen && <Login />}
            <button onClick={toggle}>Toggle Show</button>
        </div>
  )
}

export default Cart
