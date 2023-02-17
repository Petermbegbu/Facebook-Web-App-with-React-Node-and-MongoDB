import React from 'react';
import "./ChatList.css";


const ChatList = () => {

  return (
    <div className='chatListItem'>
      <img src="/images/persons/profile1.jpg" alt="" className="chatListProfileImg" />
      <span className="chatListText">Peter Mbegbu</span>
    </div>
  )
}

export default ChatList;