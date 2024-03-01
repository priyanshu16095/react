import React, { useEffect, useState } from 'react'
import Signup from './Signup'
import { app } from './firebase'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const auth = getAuth(app)

function App() {
  const[user, setUser] = useState()

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if(user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })
  }, [])

  if(user === null) {
    return (
      <div>
        <Signup/>
      </div>
    )
  }
  return (
    <div>
      <h3>Hello</h3>
    </div>
  )
}

export default App
