import React from 'react';

import Leftbar from '../../components/Leftbar/Leftbar';
import Feed from '../../components/Feed/Feed';
import UserInfo from '../../components/UserInfo/UserInfo';
import TopBar from '../../components/TopBar/TopBar';
import "./Profile.css";

export default function Profile() {
  return (
    <div>
        <TopBar />

        <div className="profileBody row">
            <div className="col-md-3 profileLeft">
                <Leftbar />
            </div>

            <div className='col-md-9 profileRight'>
                <div className="profileRightTop">
                    <div className='profileImgBlock'>
                        <img src="/images/posts/sky.jpg" alt="" className="profileCoverImg" />
                        <img src="/images/persons/profile1.jpg" alt="" className="profileUserImg" />
                    </div>
                    
                    <div className='profileInfo'>
                        <h4 className="profileInfoName">Peter Mbegbu</h4>
                        <span className="profileInfoDesc">782 Friends</span>
                    </div>
                </div>
                <div className="row profileRightBottom">
                    <div className='col-md-7 profileFeed'>
                        <Feed />
                    </div>
                    <div className='col-md-5'>
                        <UserInfo />
                    </div>
                </div>
            </div>

        </div>
    </div>
    
  )
}
