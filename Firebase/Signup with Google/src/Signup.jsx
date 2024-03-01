import React, { useState } from 'react'
import { app } from './firebase'
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

function Signup() {
    const[emailId, setEmailId] = useState('')
    const[password, setPassword] = useState('')

    const createUser = () => {
        createUserWithEmailAndPassword(auth, emailId, password)
        .then(message => alert("Sign up successful"))
    }
    const createUserWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(message => alert("Sign up with Google successful"))
    }

    return (
        <div className='container'>
            <h3>User Details</h3>
            <input type="email" placeholder='Email Id' onChange={e => setEmailId(e.target.value)} />
            <input type="password" placeholder='Password' onChange={e => setPassword(e.target.value)} />
            <button onClick={createUser}>Sign up</button>
            <button onClick={createUserWithGoogle}>Sign up with Google</button>
        </div>
    )
}

export default Signup
