import React from 'react'

import { EMPTY_IMAGE_PATH } from '../../variables'
import "./Followings.css"

export default function Followings(props) {
  const {friend} = props;

  return (
    <div className='followingDiv'>
      <div className='followingImgDiv'>
        <img src={friend.profilePicture.url || EMPTY_IMAGE_PATH} alt="profilePics" className="followingProfileImg" />
      </div>
      <span className='followingUsername'>{friend.username}</span>
    </div>
  )
}
