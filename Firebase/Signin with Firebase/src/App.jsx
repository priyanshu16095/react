import React, { useState } from 'react'
import Signin from './Signin'
import Signup from './Signup'

function App() {
  return (
    <div>
      <Signup />
      <hr />
      <Signin />
    </div>
  )
}

export default App