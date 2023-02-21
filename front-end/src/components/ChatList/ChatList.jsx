import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { EMPTY_IMAGE_PATH } from '../../variables';
import "./ChatList.css";


const ChatList = (props) => {
  const {conversation, currentUser} = props;

  const [user, setUser] = useState(null);


  useEffect(() => {
    const friendId = conversation.membersIds.find((id) => id !== currentUser._id);

    const getUser = async () => {
      const res = await axios.get(`/api/user/get/${friendId}`)

      setUser(res.data);
    }

    getUser()

  }, [conversation.membersIds, currentUser._id])


  return (
    <div className='chatListItem'>
      <img src={user && user.profilePicture.url ? user.profilePicture.url : EMPTY_IMAGE_PATH} 
        alt="" className="chatListProfileImg" />
      <span className="chatListText">{user && user.username}</span>
    </div>
  )
}

export default ChatList;