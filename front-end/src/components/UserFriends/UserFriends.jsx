import React from 'react';
import { Link } from 'react-router-dom';

import { EMPTY_IMAGE_PATH } from '../../variables';
import "./UserFriends.css";


const UserFriends = ({friend}) => {

  return (
    <Link to={`/profile/${friend.username}/${friend._id}`} className="friendsLink col">
      <div className='userFriendItem'>
          <img src={friend.profilePicture || EMPTY_IMAGE_PATH} alt="" className="userFriendImg" />
          <span className="userFriendName">{friend.username}</span>
      </div>
    </Link>
    
  )
}


export default UserFriends;