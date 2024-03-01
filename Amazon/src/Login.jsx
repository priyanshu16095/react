import React from 'react'
import avatar from '../img/random/avatar.png'

function Login() {
  return (
    <div className='login'>
        <div>
            <img src={avatar} width={'170rem'} />
        </div>
        <div className='loginItems'>
            <h2>User Details</h2>
            <input type="text" placeholder='Email Id' />
            <input type="text" placeholder='Password' />
            <button>Login</button>
            <p style={{marginTop: '0.5rem'}}>Create account</p>
            <hr />
            <button>Sign up</button>
        </div>
      
    </div>
  )
}

export default Login
