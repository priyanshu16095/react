import { useState } from "react"
import "./App.css"
import Axios from "axios"

function App() {
    const [generatedExcuse, setGeneratedExcuse] = useState("")
    const fetchExcuse = (excuse) => {
        Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((response) => {
            setGeneratedExcuse(response.data[0].excuse)
    })
    }
    return (
        <div>
            <h1>Generate Excuse</h1>
            <button onClick={() => fetchExcuse("family")}>Family</button>
            <button onClick={() => fetchExcuse("party")}>Party</button>
            <button onClick={() => fetchExcuse("office")}>Office</button>
            <p>{generatedExcuse}</p>
        </div>
    )
}

export default App