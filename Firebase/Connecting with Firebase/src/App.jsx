import React from 'react'
import { getDatabase, ref, set } from 'firebase/database'
import { app } from './firebase'

const db = getDatabase(app);

function App() {
    const putData = () => {
        set(ref(db, 'user/priyanshu'), {
            id: 1,
            name: 'Priyanshu',
            age: 18
        })
    }
    return (
        <div>
            <h2>React-Firebase</h2>
            <button onClick={putData}>Put data</button>
        </div>
    )
}

export default App