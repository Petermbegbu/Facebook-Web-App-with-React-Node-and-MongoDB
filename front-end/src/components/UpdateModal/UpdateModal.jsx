import React, {useState} from 'react'
import { Close, CloudUpload } from '@mui/icons-material';
import { connect } from 'react-redux';
import { updateUserAction } from '../../redux/actionCreators/authCreators';

import { updateSchema } from '../../validations/profileUpdate';
import "./UpdateModal.css"


const UpdateModal = (props) => {
    const {isModal, setIsModal, isUpdate, setIsUpdate, updateUserAction} = props;

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [relationship, setRelationship] = useState("");
    const [profilePicture, setProfilePicture] = useState("");
    const [coverPicture, setCoverPicture] = useState("");

    const [isValid, setIsValid] = useState(true);

    const profileImgName = "profileImg";
    const coverImgName = "coverImg";


    const handleFileChange = (e) => {
        const name = e.target.name;
        const file = e.target.files[0];

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            if(name === profileImgName) setProfilePicture(reader.result);

            if(name === coverImgName) setCoverPicture(reader.result);
        }
    }

    const handleUpdateClick = async (e) => {
        e.preventDefault(); //To stop the default behavior of the submit button, by not refreshing the page
        
        //We select only the inputs with values
        let userCredentials = {};

        if (username.trim() !== "") userCredentials.username = username;
        if (email.trim() !== "") userCredentials.email = email;
        if (password.trim() !== "") userCredentials.password = password;
        if (city.trim() !== "") userCredentials.city = city;
        if (country.trim() !== "") userCredentials.country = country;
        if (relationship.trim() !== "") userCredentials.relationship = relationship;
        if (profilePicture.trim() !== "") userCredentials.profilePicture = profilePicture;
        if (coverPicture.trim() !== "") userCredentials.coverPicture = coverPicture;
        
    
        const validate = await updateSchema.isValid(userCredentials)
    
        setIsValid(validate);

        if(validate) {
           await updateUserAction(userCredentials);

           setIsModal(!isModal)
           setIsUpdate(!isUpdate)
        } 
    
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
                                {
                                    profilePicture 
                                        ? <img src={profilePicture} alt="" className="updateImg"/>
                                        : <CloudUpload className='uploadIcon'/>
                                }
                                
                                <input 
                                    type="file" id="profileFile"
                                    accept='.png, .jpg, .jpeg' 
                                    style={{display: "none"}}
                                    name={profileImgName}
                                    onChange={handleFileChange}
                                />
                            </div>
                        </label>

                        <label htmlFor='coverFile' className='uploadLabel'>
                            <span className='uploadTitle'>Cover Picture</span>
                            <div className='uploadPicUniform'>
                                {
                                    coverPicture 
                                        ? <img src={coverPicture} alt="" className="updateImg"/>
                                        : <CloudUpload className='uploadIcon'/>
                                }
                                <input 
                                    type="file" id="coverFile" 
                                    accept='.png, .jpg, .jpeg' 
                                    style={{display: "none"}}
                                    name={coverImgName}
                                    onChange={handleFileChange}
                                />
                            </div>
                        </label>

                    </div>

                    <form className='updateForm'>
                        {
                            !isValid && <span className='updateErrorText'>Error!! Fill in the form correctly!!</span>
                        }
                        <input type="text" className="updateInput" placeholder="Name" 
                            onChange={(e) => setUsername(e.target.value)}/>

                        <input type="email" className="updateInput" placeholder="Email"  
                            onChange={(e) => setEmail(e.target.value)}/>

                        <input type="text" className="updateInput" placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}/>

                        <input type="text" className="updateInput" placeholder="City" 
                            onChange={(e) => setCity(e.target.value)}/>

                        <input type="text" className="updateInput" placeholder="Country" 
                            onChange={(e) => setCountry(e.target.value)}/>

                        <input type="text" className="updateInput" placeholder="Relationship"  
                            onChange={(e) => setRelationship(e.target.value)}/>

                        <button type='button' className='btn btn-primary updateBtn' onClick={handleUpdateClick}>
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



export default connect(null, {updateUserAction})(UpdateModal);
