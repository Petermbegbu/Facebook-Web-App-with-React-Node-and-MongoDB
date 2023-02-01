import React, {useRef, useState} from 'react'
import { connect } from 'react-redux';
import { CircularProgress } from '@mui/material';
import { loginSchema } from '../../validations/loginValidation';

import { loginAction } from '../../redux/actionCreators/authCreators';
import "./Login.css";



const Login = (props) => {

  //Destructure props
  const {loginAction, isFetching, error} = props;

  const [isValid, setIsValid] = useState(true);

  const email = useRef();
  const password = useRef();



  const handleClick = async (e) => {
    e.preventDefault(); //To stop the default behavior of the submit button, by not refreshing the page
    
    const userCredentials = {
      email: email.current.value,
      password: password.current.value
    }

    const validate = await loginSchema.isValid(userCredentials)

    setIsValid(validate);

    if(validate) {
      loginAction(userCredentials);
    } 

  }


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
                {
                  !isValid 
                    ? <h6 className='errMessage'>Please fill all fields correctly</h6> 
                    : error ?  <h6 className='errMessage'>{error}</h6> 
                    : ""
                }

                <input type="email" className="form-control" placeholder="Email"  ref={email}/>
                <input type="password" className="form-control" placeholder="Password" ref={password}/>
                <button className='btn loginBtn' onClick={handleClick}>
                  {isFetching ? <CircularProgress color="success" size="20px"/> : "Login"}
                </button>

                <p className='resetPassword'>Forgot Password ?</p>

                <button className='btn createNewBtn'>Creat a New Account</button>
            </div>
        </div>

      </div>
    </div>
  )
}


const mapStateToProps = (state) => {
  const {auth} = state;

  return {
    isFetching: auth.isFetching,
    error: auth.error
  }
}


export default connect(mapStateToProps, {loginAction})(Login);