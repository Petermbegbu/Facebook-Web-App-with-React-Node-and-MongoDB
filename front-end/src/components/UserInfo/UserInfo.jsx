import React from 'react';

import UserFriends from '../UserFriends/UserFriends';
import { Users } from '../../dummyData';
import "./UserInfo.css";



export default function UserInfo() {
  return (
    <div>
      <div className='userInfoItemBlock'>
        <h5 className='userInfoTitle'>User Information</h5>

        <div className='userInfoItem'>
            <span className="userInfoKey">City:</span>
            <span className="userInfoValue">Middlesbrough</span>
        </div>
        <div className='userInfoItem'>
            <span className="userInfoKey">From:</span>
            <span className="userInfoValue">Nigeria</span>
        </div>
        <div className='userInfoItem'>
            <span className="userInfoKey">Relationship:</span>
            <span className="userInfoValue">Single</span>
        </div>
      </div>

      <div className='userFriendsBlock'>
        <h5 className='userInfoTitle'>User Friends</h5>

        <div className='userFriends'>
            {
                Users.map(user => <UserFriends user={user} />)
            }
        </div>
      </div>

    </div>
  )
}
