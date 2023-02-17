import React from 'react'

import ChatList from '../../components/ChatList/ChatList';
import TopBar from '../../components/TopBar/TopBar';
import Message from '../../components/Message/Message';
import {NearMe} from '@mui/icons-material';
import "./Messenger.css";

export default function Messenger() {
  return (
    <div className='messenger'>
      <TopBar />

      <div className='messengerBlock row'>
        <div className="chatMenu col-md-3">
          <div className="chatMenuWrapper chatUniform">
            <input type="text" className='form-control' placeholder='Search for Friends'/>

            <ChatList />
            <ChatList />
            <ChatList />
            <ChatList />
          </div>
        </div>

        <div className="chatBox col-md-6">
          <div className="chatBoxWrapper chatUniform">
            <div className="chatBoxTop">
              <Message />
              <Message mine={true} />
              <Message />
              <Message />
              <Message mine={true} />
              <Message />
              <Message />
              <Message mine={true} />
              <Message />
            </div>
            <div className='chatBoxBottom'>
                <input type="text" className="chatInput" placeholder="Type a message" />
                <button class="btn btn-sm btn-primary">
                  <NearMe />
                </button>
              </div>
          </div>
        </div>

        <div className="chatOnline col-md-3">
          <div className="chatOnlineWrapper chatUniform">
            right
          </div>
        </div>
      </div>
    </div>
  )
}
