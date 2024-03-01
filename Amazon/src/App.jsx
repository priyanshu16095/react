import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Items from './Items'
import Cart from './Cart'
import Login from './Login'

function App() {
  return (
    <>
      <Router>
      <Navbar />
      <hr />
        <Routes>
          <Route path='/items' element={<Items/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </Router> 
    </>
  )
}

export default App
