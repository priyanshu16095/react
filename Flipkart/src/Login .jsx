import React from 'react'
import avatar from '../img/random/avatar.png'
import googleIcon from '../img/logo/google icon.png'
import facebookIcon from '../img/logo/facebook.png'
import appleIcon from '../img/logo/appleIcon.png'

const Login  = () => {
  return (
    <div className="mainLogin">
    <div className="login">
        <div className="image">
            <img src={avatar} width={'180rem'} style={{borderRadius:'0.5rem'}}/>
        </div>
        <div className="form">
            <h2>Log in</h2>
            <input type="text" placeholder='Email' />
            <input type="text" placeholder='Password' />
            <button>Log in</button>
            <p>Don't have an account. <a href=''>Create Account</a></p>
            <div className='options'>
                <h3>Login with</h3>
                <ul className='optionsIcon'>
                    <li><img src={googleIcon} /></li>
                    <li><img src={facebookIcon} /></li>
                    <li><img src={appleIcon} style={{marginBottom:'0.5rem'}}/></li>
                </ul>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login 
