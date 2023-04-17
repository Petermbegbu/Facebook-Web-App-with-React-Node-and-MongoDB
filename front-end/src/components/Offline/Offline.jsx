import React from 'react'

import { EMPTY_IMAGE_PATH } from '../../variables'
import "./Offline.css"


export default function Offline(props) {
  const {friend, callBackFunc} = props;

  return (
    <div className='offlineFriendDiv' onClick={() => callBackFunc(friend)}>
      <div className='offlineImgDiv'>
        <img src={friend.profilePicture.url || EMPTY_IMAGE_PATH} alt="profilePics" className="offlineProfileImg" />
      </div>
      <span className='offlineUsename'>{friend.username}</span>
    </div>
  )
}
