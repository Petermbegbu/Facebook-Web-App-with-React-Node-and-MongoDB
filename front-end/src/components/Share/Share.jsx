import React, {useRef, useState} from 'react';
import { connect } from 'react-redux';
import axios from "axios";
import {PermMedia, LocationOn, EmojiEmotions, Cancel} from '@mui/icons-material';

import { EMPTY_IMAGE_PATH } from '../../variables';
import "./Share.css";


const Share = (props) => {
  const {user} = props;

  const [file, setFile] = useState(null);
  const desc = useRef();


  const handleFileChange = (e) => {

    setFile(e.target.files[0]);
  }
  

  const handleShare = async () => {
  
    const formData = new FormData();

    formData.append("_userId", user._id);
    formData.append("desc", desc.current.value);
    formData.append("img", file);

    try {
      await axios.post("/api/post/create", formData);

      window.location.reload();
    } catch (err) {
      console.log(err);
    }

  }


  return (
    <div className='shareBody'>
      <div className="shareWrapper">
        <div className="shareTop">
            <img src={user.profilePicture || EMPTY_IMAGE_PATH} alt="profileImg" className="shareProfileImg" />
            <input type="text" className="shareInput" ref={desc} 
              placeholder={`What's on your mind, ${user.username}?`} />
        </div>

        <hr className='shareHr'/>

        {
          file && (
            <div className='shareImgContainer'>
              <img src={URL.createObjectURL(file)} alt="" className="shareImg" />
              <Cancel className='cancelImg' onClick={() => setFile(null)} />
            </div>
          )
        }

        <div className="shareBottom">
            <label htmlFor="file" className="shareOption">
                <PermMedia htmlColor="tomato" className='shareIcon'/>
                <span className="shareOptionText">Photo</span>
                <input type="file" id="file" accept='.png, .jpg, .jpeg' onChange={handleFileChange}
                  style={{display: "none"}}/>
            </label>
            <div className="shareOption">
                <LocationOn htmlColor="red" className='shareIcon'/>
                <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
                <EmojiEmotions htmlColor="green" className='shareIcon'/>
                <span className="shareOptionText">Feeling/Activity</span>
            </div>
            <div>
              <button type='button' className='btn btn-sm shareOptionBtn' onClick={handleShare}>
                Share
              </button>
            </div>
        </div>
      </div>
    </div>
  )
}


const mapStateToProps = (state) => {
  const {auth} = state;

  return {
    user: auth.user
  }
}


export default connect(mapStateToProps)(Share);