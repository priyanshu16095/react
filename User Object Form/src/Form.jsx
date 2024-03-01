import React, { useState } from 'react'

function Form() {
  const[user, setUser] = useState({
    id: "",
    username: "",
    emailId: "",
    password: ""
  })

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  }

  return (
    <div>
        <h3>User Details</h3>
        <input type="text" placeholder='Id' name='id' value={user.id} onChange={e => handleChange(e)} />
        <input type="text" placeholder='Username' name='username' value={user.username} onChange={e => handleChange(e)} />
        <input type="text" placeholder='EmailId' name='emailId' value={user.emailId} onChange={e => handleChange(e)} />
        <input type="text" placeholder='Password' name='password' value={user.password} onChange={e => handleChange(e)} />
        <button>Sign up</button>
        <hr />
        {JSON.stringify(user)}
    </div>
  )
}

export default Form
