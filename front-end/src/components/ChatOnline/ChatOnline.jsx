import React from 'react'
import "./ChatOnline.css";

export default function ChatOnline() {
  return (
    <div className='onlineChatBlock'>
        <div className='onlineChatImgDiv'>
            <img src="/images/persons/profile1.jpg" alt="profilePics" className="onlineChatImg" />
            <span className='onlineChatBadge'></span>
        </div>
        <span className='onlineChatUsername'>Peter</span>
    </div>
  )
}
