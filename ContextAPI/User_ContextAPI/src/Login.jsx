import React, { useState } from 'react'
import { UserContext } from './Context'
import { useContext } from 'react'

function Login() {
    const[emailId, setEmailId] = useState('')
    const[password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({emailId, password})
    }

    console.log(emailId)
    return (
        <div>
            <h2>User Detials</h2>
            <input 
            type="text" 
            placeholder='Email Id'
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            />
            <input 
            type="text" 
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login