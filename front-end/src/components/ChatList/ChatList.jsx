import React, {useEffect, useState} from 'react'
import axios from 'axios';

import Online from '../Online/Online';
import Offline from '../Offline/Offline';

import "./ChatList.css";

const ChatList = (props) => {
  const {onlineIds, currentUser, setCurrentChat} = props;

  const [followings, setFollowings] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);
  const [offlineFriends, setOfflineFriends] = useState([]);


  //get all friends
  useEffect(() => {
    const getFriends = async () => {
      const res1 = await axios.get(`/api/user/followings/${currentUser._id}`);
      const res2 = await axios.get(`/api/user/followers/${currentUser._id}`);

      setFollowings(res1.data);
      setFollowers(res2.data);
    }

    getFriends();
  }, [currentUser._id])

  //set online and offline friends
  useEffect(() => {
    let allFriends = [...followings, ...followers];
    let uniqueFriendList = [...new Map(allFriends.map(friend => [friend['_id'], friend])).values()];

    const online = uniqueFriendList.filter(friend => onlineIds.some(online => online.userId === friend._id));

    const offline = uniqueFriendList.filter(friend => online.some(online => online._id !== friend._id));

    console.log("offline", offline, "uniqueFriendList", uniqueFriendList, "online", online)

    setOnlineFriends(online)

    offline.length ? setOfflineFriends(offline) : setOfflineFriends(uniqueFriendList)

  }, [followers, followings, onlineIds])


  const handleFriendClick = async (friend) => {
    try {
      const res = await axios.get(`/api/conversation/get/single/${currentUser._id}/${friend._id}`);

      const currentChat = res.data ? res.data : {}; //I may have to remove this. not sure yet

      setCurrentChat(currentChat)
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <div>
      {
        onlineFriends.map(friend => (
          <Online key={friend._id} friend={friend} callBackFunc={handleFriendClick}/>
        ))
      }

      {
        offlineFriends.map(friend => (
          <Offline key={friend._id} friend={friend} callBackFunc={handleFriendClick}/>
        ))
      }
    </div>
  )
}


export default ChatList;