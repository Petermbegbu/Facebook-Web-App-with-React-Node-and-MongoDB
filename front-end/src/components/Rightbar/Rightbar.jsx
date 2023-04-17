import React, { useEffect } from 'react'
import {CardGiftcard} from '@mui/icons-material';
import { connect } from 'react-redux';

import { getFindFriendsAction } from '../../redux/actionCreators/friendsCreators';
import Friend from '../Friend/Friend';
import "./Rightbar.css";

const Rightbar = (props) => {
  const {findFriends, getFindFriendsAction} = props;


  useEffect(() => {
    const getFindFriends = async () => {
      await getFindFriendsAction()
    }

    getFindFriends();
  }, [])


  return (
    <div className='rightbarBody'>

      {/* Advert Block */}
      <div className="advertBlock">
        <h6 className='text-secondary mb-3'>Ads</h6>
        <div className="adsDiv1">
          <img src="/images/ads/ads1.jpg" alt="ads" className="ads" />
        </div>
        <div className="">
          <img src="/images/ads/ads2.jpg" alt="ads" className="ads" />
        </div>
      </div>

      <hr />

      {/* BirthDay Block */}
      <div>
        <h6 className='text-secondary mb-3'>Birthdays</h6>
        <div className='birthdayDiv'>
          <CardGiftcard color="primary" fontSize='large'/>
          <span className="birthdayText">
            <b>Daniel Smith</b> and <b>3 Other friends</b> have birthday today.
          </span>
        </div>
      </div>

      <hr />

      <div>
        <h6 className='text-secondary mb-3'>Find Friends</h6>

        <ul className='rightbarFriendList'>
          {
            findFriends && findFriends.map(friend => <Friend key={friend._id} friend={friend} />)
          }
        </ul>
      </div>

    </div>
  )
}


const mapStateToProps = (state) => {
  const {friends} = state;

  return {
    findFriends: friends.findFriends,
  }
}


export default connect(mapStateToProps, {getFindFriendsAction})(Rightbar);