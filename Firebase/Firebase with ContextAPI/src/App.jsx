import React, { useState } from 'react'
import { useFirebase } from './context/Firebase'

function App() {
  const firebase = useFirebase()
  console.log(firebase)

  const[emailId, setEmailId] = useState()
  const[password, setPassword] = useState()

  return (
    <div>
      <input type="email" placeholder='Email Id' onChange={e => setEmailId(e.target.value)} />
      <input type="password" placeholder='Password' onChange={e => setPassword(e.target.value)} />
      <button onClick={() => {firebase.signupUserWithEmailAndPassword(emailId, password)}}>Sign up</button>
    </div>
  )
}

export default App
