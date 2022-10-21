import React from 'react'
import "./Online.css"

export default function Online({user}) {
  return (
    <div>
          <li className='rightbarFriend'>
              <div className='friendsImgDiv'>
                <img src={user.profilePicture} alt="profilePics" className="rightbarProfileImg" />
                <span className='rightbarOnlineBadge'></span>
              </div>
              <span className='rightbarUsename'>{user.username}</span>
            </li>
    </div>
  )
}
