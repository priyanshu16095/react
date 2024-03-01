import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from "./firebase";

const auth = getAuth(app)

const Signup = () => {
    const[emailId, setEmailId] = useState('')
    const[password, setPassword] = useState('')

    const createUser = () => {
        createUserWithEmailAndPassword(auth, emailId, password).then(value => alert('Signup Sucess'))
    }
    return (
        <div className="container">
            <h3>Sign up Page</h3>
            <input type="text" placeholder="EmailId" onChange={e => setEmailId(e.target.value)} />
            <input type="text" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <button onClick={createUser}>Sign up</button>
        </div>
    )
}

export default Signup