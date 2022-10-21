import React from 'react'
import {CardGiftcard} from '@mui/icons-material';

import { Users } from '../../dummyData';
import Online from '../Online/Online';
import "./Rightbar.css";

export default function Rightbar() {
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
        <h6 className='text-secondary mb-3'>Online Friends</h6>

        <ul className='rightbarFriendList'>
          {
            Users.map(user => <Online key={user.id} user={user} />)
          }
        </ul>
      </div>

    </div>
  )
}
