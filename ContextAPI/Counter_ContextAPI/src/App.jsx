import React, { useState } from 'react'
import Counter from './Counter'

import { useContext } from 'react'
import { CounterContext } from './context/Context'

function App() {
  const counterState = useContext(CounterContext)
  return (
    <div className='container'>
      <h1>Count is {counterState.count}</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  )
}

export default App
