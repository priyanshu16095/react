import React from 'react'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Hero from './Hero'

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Footer />
    </>
  )
}

export default App
