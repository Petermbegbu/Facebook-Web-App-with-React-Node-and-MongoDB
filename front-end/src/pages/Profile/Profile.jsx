import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

import Leftbar from '../../components/Leftbar/Leftbar';
import Feed from '../../components/Feed/Feed';
import UserInfo from '../../components/UserInfo/UserInfo';
import TopBar from '../../components/TopBar/TopBar';
import "./Profile.css";

export default function Profile() {
    const [user, setUser] = useState({});

    const {userID} = useParams();

    //check for profile pictures
    const profilePicture = user.profilePicture ? user.profilePicture : "/images/persons/emptyProfileImage.jpg";
    const coverPicture = user.coverPicture ? user.coverPicture : "/images/posts/sky.jpg";

    useEffect(() => {

        const fetchUser = async () => {
            const res = await axios.get(`/api/user/get/${userID}`);

            setUser(res.data);
        }

        fetchUser();
    }, [userID])


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
                        <img src={coverPicture} alt="" className="profileCoverImg" />
                        <img src={profilePicture} alt="" className="profileUserImg" />
                    </div>
                    
                    <div className='profileInfo'>
                        <h4 className="profileInfoName">{user.username}</h4>
                        <span className="profileInfoDesc">{user.description}</span>
                    </div>
                </div>
                <div className="row profileRightBottom">
                    <div className='col-md-7 profileFeed'>
                        <Feed userID={user._id} profile="true"/>
                    </div>
                    <div className='col-md-5'>
                        <UserInfo user={user}/>
                    </div>
                </div>
            </div>

        </div>
    </div>
    
  )
}
