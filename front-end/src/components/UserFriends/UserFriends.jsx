import React from 'react';
import { Link } from 'react-router-dom';

import { EMPTY_IMAGE_PATH } from '../../variables';
import "./UserFriends.css";


const UserFriends = ({friend}) => {

  return (
    <Link to={`/profile/${friend.username}/${friend._id}`} className="friendsLink">
      <div className='userFriendItem'>
          <img src={friend.profilePicture.url || EMPTY_IMAGE_PATH} alt="" className="userFriendImg" />
          <div className="userFriendName">{friend.username}</div>
      </div>
    </Link>
    
  )
}


export default UserFriends;