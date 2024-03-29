import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';

import { followAction, unFollowAction } from '../../redux/actionCreators/authCreators';
import "./UserInfo.css";



const UserInfo = (props) => {
  const {user, currentUser, followAction, unFollowAction} = props;

  const [followed, setFollowed] = useState(false);


  useEffect(() => {
    setFollowed(currentUser.followings.includes(user._id))
  }, [currentUser.followings, user._id])


  const handleFollowClick = async () => {
    if (followed) {
      await unFollowAction(user._id);
    } else {
      await followAction(user._id);
    }

    setFollowed(!followed);
  }


  return (
    <div>
      {/* Display follow button only if we are not on the current user page */}
      {
        user._id !== currentUser._id && 
        (<div className='btn btn-primary followBtn' onClick={handleFollowClick}>
          {followed ? "Unfollow -" : "Follow +"} 
        </div>)
      }

      <div className='userInfoItemBlock'>
        <h5 className='userInfoTitle'>User Information</h5>

        <div className='userInfoItem'>
            <span className="userInfoKey">Gender:</span>
            <span className="userInfoValue">{user.gender}</span>
        </div>
        <div className='userInfoItem'>
            <span className="userInfoKey">Relationship:</span>
            <span className="userInfoValue">{user.relationship}</span>
        </div>
        <div className='userInfoItem'>
            <span className="userInfoKey">City:</span>
            <span className="userInfoValue">{user.city}</span>
        </div>
        <div className='userInfoItem'>
            <span className="userInfoKey">Country:</span>
            <span className="userInfoValue">{user.country}</span>
        </div>
      </div>

    </div>
  )
}


const mapStateToProps = (state) => {
  const {auth} = state;

  return {
    currentUser: auth.user
  }
}
 


export default connect(mapStateToProps, {followAction, unFollowAction})(UserInfo);
