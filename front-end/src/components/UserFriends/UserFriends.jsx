import React from 'react';
import { Link } from 'react-router-dom';

import { EMPTY_IMAGE_PATH } from '../../variables';
import "./UserFriends.css";


const UserFriends = ({friend}) => {

  return (
    <Link to={`/profile/${friend.username}/${friend._id}`}>
      <div className='userFriendItem'>
          <div className='userFriendImgDiv'>
              <img src={friend.profilePicture || EMPTY_IMAGE_PATH} alt="" className="userFriendImg" />
          </div>
          <span className="userFriendName">{friend.username}</span>
      </div>
    </Link>
    
  )
}


export default UserFriends;