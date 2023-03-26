import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import Leftbar from '../../components/Leftbar/Leftbar';
import Feed from '../../components/Feed/Feed';
import UserInfo from '../../components/UserInfo/UserInfo';
import UserFriends from '../../components/UserFriends/UserFriends';
import TopBar from '../../components/TopBar/TopBar';
import UpdateModal from '../../components/UpdateModal/UpdateModal';
import { EMPTY_IMAGE_PATH } from '../../variables';
import "./Profile.css";

const Profile = (props) => {
    const {currentUser} = props;

    const {userID} = useParams();

    const [user, setUser] = useState(null);
    const [friends, setFriends] = useState([]);
    const [isModal, setIsModal] = useState(false)
    const [isUpdate, setIsUpdate] = useState(false)

    //check for profile pictures
    const profilePicture = user && user.profilePicture ? user.profilePicture.url : EMPTY_IMAGE_PATH;
    const coverPicture = user && user.coverPicture ? user.coverPicture.url : "/images/posts/sky.jpg";

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/api/user/get/${userID}`);

            setUser(res.data)
        }

        fetchUser();
    }, [userID, isUpdate])


    useEffect(() => {
        const getFollowings = async () => {
          const res = await axios.get(`/api/user/followings/${userID}`);
    
          setFriends(res.data);
        }
    
        getFollowings();
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
                            <h4 className="profileInfoName">{user && user.username}</h4>
                            <span className="profileInfoDesc">{user && user.followers.length} Followers</span>

                            {
                                user && user._id === currentUser._id && (
                                    <button className='btn btn-primary' onClick={() => setIsModal(!isModal)}>
                                        Update
                                    </button>
                                )
                            }
                        </div>
                    </div>
                    <div className="row profileRightBottom">
                        <div className='col-md-7 profileFeed'>
                            {user && <Feed profile={true} user={user}/>}
                        </div>
                        <div className='col-md-5'>
                            {user && <UserInfo user={user}/>}

                            <div className='userFriendsBlock'>
                                <h5 className='userInfoTitle'>User Friends</h5>

                                <div className='userFriends'>
                                    {
                                        friends.map(friend => <UserFriends key={friend._id} friend={friend} />)
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <>
                {
                    isModal &&  (
                        <UpdateModal isModal={isModal} setIsModal={setIsModal}
                            isUpdate={isUpdate} setIsUpdate={setIsUpdate}/>
                    )
                }
            </>
        </div>
    
    )
}


const mapStateToProps = (state) => {
    const {auth} = state;

    return {
        currentUser: auth.user
    }
}


export default connect(mapStateToProps)(Profile);