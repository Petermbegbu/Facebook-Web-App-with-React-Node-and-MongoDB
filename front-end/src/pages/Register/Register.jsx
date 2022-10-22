import React from 'react'

import "./Register.css";

export default function Register() {
  return (
    <div className='RegisterBody'>
      <div className='RegisterWrapper row'>

        <div className='col-md-6 RegisterlogoBar'>
            <div>
                <p className='RegisterLogo'>Chestbook</p>
                <span className='RegisterDesc'>Connect with friends and the world around you on Chestbook</span>
            </div>
        </div>

        <div className='col-md-5 offset-1 formBar'>
            <div className='formDiv'>
                <input type="text" class="form-control" placeholder="Username" />
                <input type="email" class="form-control" placeholder="Email" />
                <input type="password" class="form-control" placeholder="Password" />
                <input type="password" class="form-control" placeholder="Re-enter Password" />
                <button className='btn RegisterBtn'>Sign Up</button>
                <button className='btn LogIntoAcc'>Log into Account</button>
            </div>
        </div>

      </div>
    </div>
  )
}
