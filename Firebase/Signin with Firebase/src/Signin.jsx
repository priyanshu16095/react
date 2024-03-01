import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from './firebase'

const auth = getAuth(app)

function Signin() {
  const[emailId, setEmailId] = useState('')
  const[password, setPassword] = useState('')

  const signinUser = () => {
    signInWithEmailAndPassword(auth, emailId, password)
    .then(value => alert('Signin Sucessful'))
    .catch(err => console.log(err))
  }
  
  return (
    <div className='container'>
      <h3>Signin Page</h3>
      <input type="text" placeholder='EmailId' onChange={e => setEmailId(e.target.value)} />
      <input type="text" placeholder='Password' onChange={e => setPassword(e.target.value)} />
      <button onClick={signinUser}>Sign in</button>
    </div>
  )
}

export default Signin