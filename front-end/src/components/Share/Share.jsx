import React from 'react'

import {PermMedia, LocationOn, EmojiEmotions} from '@mui/icons-material';
import "./Share.css";

export default function Share() {
  return (
    <div className='shareBody'>
      <div className="shareWrapper">
        <div className="shareTop">
            <img src="/images/persons/profile1.jpg" alt="profileImg" className="shareProfileImg" />
            <input type="text" className="shareInput" placeholder="What's on your mind, Peter?" />
        </div>

        <hr className='shareHr'/>

        <div className="shareBottom">
            <div className="shareOption">
                <PermMedia htmlColor="tomato" className='shareIcon'/>
                <span className="shareOptionText">Photo/Video</span>
            </div>
            <div className="shareOption">
                <LocationOn htmlColor="red" className='shareIcon'/>
                <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
                <EmojiEmotions htmlColor="green" className='shareIcon'/>
                <span className="shareOptionText">Feeling/Activity</span>
            </div>
            <div>
              <button className='btn btn-sm shareOptionBtn'>Share</button>
            </div>
        </div>
      </div>
    </div>
  )
}
