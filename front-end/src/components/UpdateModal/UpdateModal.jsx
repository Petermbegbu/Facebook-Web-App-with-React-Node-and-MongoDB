import React, {useRef, useState} from 'react'
import { Close, CloudUpload } from '@mui/icons-material';
import { CircularProgress } from '@mui/material';

import { updateSchema } from '../../validations/profileUpdate';
import "./UpdateModal.css"


const UpdateModal = (props) => {
    const {isModal, setIsModal} = props;

    const nameRef = useRef();
    const emailRef = useRef();
    const countryRef = useRef();
    const relatioshipRef = useRef();

    const [isValid, setIsValid] = useState(true);



    const handleUpdateClick = async (e) => {
        e.preventDefault(); //To stop the default behavior of the submit button, by not refreshing the page
        
        const userCredentials = {
            username: nameRef.current.value,
            email: emailRef.current.value,
            country: countryRef.current.value,
            relatioship: relatioshipRef.current.value
        }
    

        const validate = await updateSchema.isValid(userCredentials)
    
        setIsValid(validate);

    
        // if(validate) {
        //   await loginAction(userCredentials);
        // } 
    
      }



    return (
        <div className='modalOuterDiv'>
            <div className='modalDiv'>
                <div>
                    <Close className='closeIcon' onClick={() => setIsModal(!isModal)}/>
                </div>

                <div className='modalContent'>
                    <h3 className='updateTitle'>Update Profile Details</h3>

                    <div className='uploadSection'>
                        <label htmlFor='profileFile' className='uploadLabel'>
                            <span className='uploadTitle'>Profile Picture</span>
                            <div className='uploadPicUniform'>
                                <CloudUpload className='uploadIcon'/>
                                <input type="file" id="profileFile" accept='.png, .jpg, .jpeg' style={{display: "none"}}/>
                            </div>
                        </label>

                        <label htmlFor='coverFile' className='uploadLabel'>
                            <span className='uploadTitle'>Cover Picture</span>
                            <div className='uploadPicUniform'>
                                <CloudUpload className='uploadIcon'/>
                                <input type="file" id="coverFile" accept='.png, .jpg, .jpeg' style={{display: "none"}}/>
                            </div>
                        </label>
                    </div>

                    <form className='updateForm'>
                        {
                            !isValid && <span className='updateErrorText'>Error!! Fill in the form correctly!!</span>
                        }
                        <input type="text" className="updateInput" placeholder="Name"  ref={nameRef}/>
                        <input type="email" className="updateInput" placeholder="Email"  ref={emailRef}/>
                        <input type="text" className="updateInput" placeholder="Country"  ref={countryRef}/>
                        <input type="text" className="updateInput" placeholder="Relationship"  ref={relatioshipRef}/>

                        <button className='btn btn-primary updateBtn' onClick={handleUpdateClick}>
                            Update
                        </button>
                        <button type='button' className='btn btn-danger cancelBtn' onClick={() => setIsModal(!isModal)}>
                            Cancel
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateModal
