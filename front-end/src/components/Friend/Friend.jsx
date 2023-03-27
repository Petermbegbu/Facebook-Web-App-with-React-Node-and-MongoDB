import React from 'react'
import { Link } from 'react-router-dom';

import { EMPTY_IMAGE_PATH } from '../../variables'
import "./Friend.css"

const Friend = (props) => {
  const {friend} = props;

  const profilePicture = friend.profilePicture ? friend.profilePicture.url : EMPTY_IMAGE_PATH

  return (
    <Link to={`/profile/${friend.username}/${friend._id}`} className='friendDiv'>
      <div className='friendImgDiv'>
        <img src={profilePicture} alt="profilePics" className="friendProfileImg" />
      </div>
      <span className='friendUsername'>{friend.username}</span>
    </Link>
  )
}



export default Friend;