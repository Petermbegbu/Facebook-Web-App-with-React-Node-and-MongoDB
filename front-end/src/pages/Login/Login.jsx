import React from 'react'

import "./Login.css";

export default function Login() {
  return (
    <div className='loginBody'>
      <div className='loginWrapper row'>

        <div className='col-md-6 logoBar'>
            <div>
                <p className='loginLogo'>Chestbook</p>
                <span className='loginDesc'>Connect with friends and the world around you on Chestbook</span>
            </div>
        </div>

        <div className='col-md-5 offset-1 formBar'>
            <div className='formDiv'>
                <input type="email" class="form-control" placeholder="Email" />
                <input type="password" class="form-control" placeholder="Password" />
                <button className='btn loginBtn'>Login</button>
                <p className='resetPassword'>Forgot Password ?</p>
                <button className='btn createNewBtn'>Creat a New Account</button>
            </div>
        </div>

      </div>
    </div>
  )
}
