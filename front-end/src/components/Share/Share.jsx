import React, {useRef, useState} from 'react';
import { connect } from 'react-redux';
import axios from "axios";
import {PermMedia, LocationOn, EmojiEmotions, Cancel} from '@mui/icons-material';

import { EMPTY_IMAGE_PATH } from '../../variables';
import "./Share.css";
import { Link } from 'react-router-dom';


const Share = (props) => {
  const {user} = props;

  const [fileSource, setFileSource] = useState("");
  const desc = useRef();


  const handleFileChange = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setFileSource(reader.result)
    }

  }


  const handleShare = async () => {

    if(!desc.current.value && !fileSource) {
      window.alert("Add a text or Photo")

      return
    }

    const data = {
      _userId: user._id,
      desc: desc.current.value,
      img: fileSource
    }

    try {
      await axios.post("/api/post/create", data);

      window.location.reload();
    } catch (err) {
      console.log(err);
    }
    
  }


  return (
    <div className='shareBody'>
      <div className="shareWrapper">
        <div className="shareTop">
          <Link to={`/profile/${user.username}/${user._id}`}>
            <img src={user.profilePicture || EMPTY_IMAGE_PATH} alt="profileImg" className="shareProfileImg" />
          </Link>
          <input type="text" className="shareInput" ref={desc} 
              placeholder={`What's on your mind, ${user.username}?`} />
        </div>

        <hr className='shareHr'/>

        {
          fileSource && (
            <div className='shareImgContainer'>
              <img src={fileSource} alt="" className="shareImg" />
              <Cancel className='cancelImg' onClick={() => setFileSource("")} />
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