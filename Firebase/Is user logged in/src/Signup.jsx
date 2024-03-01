import React, { useState } from 'react'
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { app } from './firebase'

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

function Signup() {
    const[emailId, setEmailId] = useState('')
    const[password, setPassword] = useState('')
    
    const createUser = () => {
        createUserWithEmailAndPassword(auth, emailId, password)
        .then(message => alert('Sign in successful'))
        .catch(err => console.log(err))
    }
    const createUserWithGoogle = () => {
        signInWithPopup(auth, googleProvider, emailId, password)
        .then(message => alert('Sign up with Google succesful'))
        .catch(err => console.log(err))
    }

    return (
        <div className='container'>
            <h3>User Details</h3>
            <input type="email" placeholder='Email Id' onChange={e => setEmailId(e.target.value)} />
            <input type="password" placeholder='Password' onChange={e => setPassword(e.target.value)} />
            <button onClick={createUser}>Sign up</button>
            <hr />
            <button onClick={createUserWithGoogle}>Sign up with Google</button>
        </div>
    )
}

export default Signup
