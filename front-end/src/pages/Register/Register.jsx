import React, {useRef, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { registerSchema } from '../../validations/registerValidation';
import "./Register.css";



export default function Register() {
  const [isValid, setIsValid] = useState(true);
  const [pwdMessage, setPwdMessage] = useState("");
  
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const rePassword = useRef();


  const handleSignupClick = async (e) => {
    e.preventDefault();

    if (rePassword.current.value !== password.current.value){
      setIsValid(true);
      setPwdMessage("Password does not match!!")
      return;
    } else {
      setPwdMessage("")
    }

    const userCredentials = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
    }

    const validate = await registerSchema.isValid(userCredentials);

    setIsValid(validate);

    if (validate) {
      try {
        //We dont want to use redux for this call as we wont be updating redux state with any value,
        //we only want to register user
        const res = await axios.post("/api/auth/signup", userCredentials);
        console.log(res);

        //programmatic navigation to login page
        useNavigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  }


  return (
    <div className='RegisterBody'>
      <div className='RegisterWrapper row'>

        <div className='col-md-6 RegisterlogoBar'>
            <div>
                <p className='RegisterLogo'>PUM</p>
                <span className='RegisterDesc'>Connect with friends and the world around you on Chestbook</span>
            </div>
        </div>

        <div className='col-md-5 offset-1 formBar'>
            <div className='formDiv'>
                {
                  !isValid 
                    ? <h6 className='errMessage'>Please fill all fields correctly</h6> 
                    : pwdMessage ?  <h6 className='errMessage'>{pwdMessage}</h6> 
                    : ""
                }
                <input type="text" className="form-control" placeholder="Username" ref={username} />
                <input type="email" className="form-control" placeholder="Email" ref={email}/>
                <input type="password" className="form-control" placeholder="Password" ref={password}/>
                <input type="password" className="form-control" placeholder="Re-enter Password" ref={rePassword}/>

                <button className='btn RegisterBtn' onClick={handleSignupClick}>Sign Up</button>
                <button className='btn LogIntoAcc'>Log into Account</button>
            </div>
        </div>

      </div>
    </div>
  )
}
