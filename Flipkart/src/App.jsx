import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './index.css'
import Navbar from './Navbar'
import Offers from './Offers'
import Login from './Login '
import Home from './Home'
import Cart from './Cart'

function App() {
  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/offers" element={<Offers/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
