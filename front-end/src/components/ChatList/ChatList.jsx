import React, {useEffect, useState} from 'react'
import axios from 'axios';

import Online from '../Online/Online';
import "./ChatList.css";

const ChatList = (props) => {
  const {onlineIds, currentUser, setCurrentChat} = props;

  const [followings, setFollowings] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);
  const [offlineFriends, setOfflineFriends] = useState([]);



    //get all friends
  useEffect(() => {
    const getFollowings = async () => {
      const res = await axios.get(`/api/user/followings/${currentUser._id}`);

      setFollowings(res.data);
    }

    getFollowings();
  }, [currentUser._id])
  

   //set online friends
   useEffect(() => {
    const online = followings.filter(friend => onlineIds.some(online => online.userId === friend._id));

    setOnlineFriends(online)
  }, [followings, onlineIds])


  const handleOnlineClick = async (friend) => {
    try {
      const res = await axios.get(`/api/conversation/get/single/${currentUser._id}/${friend._id}`);

      setCurrentChat(res.data)
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <div>
      {
        onlineFriends.map(friend => (
            <Online key={friend._id} friend={friend} callBackFunc={handleOnlineClick}/>
          )
        )
      }
    </div>
  )
}


export default ChatList;