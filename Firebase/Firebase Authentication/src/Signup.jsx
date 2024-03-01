import React, {useState} from 'react'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { app } from './firebase'

const auth = getAuth(app)

function App() {
    const[emailId, setEmailId] = useState("")
    const[password, setPassword] = useState("")

    const createUser = () => {
        createUserWithEmailAndPassword(auth, emailId, password).then((value) => alert('Sucess'))
    }

    return (
        <div>
            <input type="text" placeholder='EmailId' value={emailId} onChange={e => {setEmailId(e.target.value)}} />
            <input type="text" placeholder='Password' value={password} onChange={e => {setPassword(e.target.value)}} />
            <button onClick={createUser}>Signup</button>
        </div>
    )
}

export default App