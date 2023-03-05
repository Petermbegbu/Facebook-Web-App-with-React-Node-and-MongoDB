import React from 'react'

import { EMPTY_IMAGE_PATH } from '../../variables'
import "./Online.css"

export default function Online(props) {
  const {friend, callBackFunc} = props;


  return (
    <div className='onlineFriendDiv' onClick={() => callBackFunc(friend)}>
      <div className='onlineImgDiv'>
        <img src={friend.profilePicture.url || EMPTY_IMAGE_PATH} alt="profilePics" className="onlineProfileImg" />
        <span className='onlineBadge'></span>
      </div>
      <span className='onlineUsename'>{friend.username}</span>
    </div>
  )
}
