import React from 'react';

import "./UserFriends.css";

export default function UserFriends({user}) {
  return (
    <div className='userFriendItem'>
        <div className='userFriendImgDiv'>
            <img src={user.profilePicture} alt="" className="userFriendImg" />
        </div>
        <span className="userFriendName">{user.username}</span>
    </div>
  )
}
