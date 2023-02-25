import React, { useEffect, useState, useRef } from 'react'
import {NearMe} from '@mui/icons-material';
import { connect } from 'react-redux';
import ScrollToBottom from 'react-scroll-to-bottom';
import {io} from "socket.io-client";

import ChatList from '../../components/ChatList/ChatList';
import TopBar from '../../components/TopBar/TopBar';
import Message from '../../components/Message/Message';
import ChatOnline from '../../components/ChatOnline/ChatOnline';
import { getConversationsAction, getMessagesAction,
  postMessageAction } from '../../redux/actionCreators/messengerCreators';
import "./Messenger.css";



const Messenger = (props) => {
  const {currentUser, conversations, messages, getConversationsAction, 
    getMessagesAction, postMessageAction} = props;

  const [currentChat, setCurrentChat] = useState({});
  const [socket, setSocket] = useState(null);

  const newMessage = useRef();


  useEffect(() => {
    setSocket(io("ws://localhost:5000"))
  }, [])

  useEffect(() => {
    getConversationsAction(currentUser._id);
  }, [currentUser._id])

  useEffect(() => {
    currentChat._id && getMessagesAction(currentChat._id);
  }, [currentChat._id])


  const handleChatListClick = (conversation) => {
    setCurrentChat(conversation)
  }


  const handleSendClick = async () => {
    const chatMessage = {
      _senderId: currentUser._id,
      _conversationId: currentChat._id,
      text: newMessage.current.value
    }

    await postMessageAction(chatMessage);

    newMessage.current.value = "";
  }


  const handleKeyUp = (e) => {
    if(e.key === "Enter") {
      handleSendClick();
    }
  }


  return (
    <div className='messenger'>
      <TopBar />

      <div className='messengerBlock row'>
        <div className="chatMenu col-md-3">
          <div className="chatMenuWrapper chatUniform">
            <input type="text" className='form-control' placeholder='Search for Friends'/>
            {
              conversations && conversations.map((c) => {
                return <ChatList 
                    key={c._id} 
                    conversation={c} 
                    currentUser={currentUser} 
                    callBackFunc={handleChatListClick} 
                  />
              })
            }
          </div>
        </div>

        <div className="chatBox col-md-6">
          <div className="chatBoxWrapper chatUniform">
            <ScrollToBottom className="chatBoxTop">
              {
                currentChat._id
                ? (
                    <>
                      {
                        messages.map((m) => (
                            <Message  
                              key={m._id}
                              message={m} 
                              mine={m._senderId === currentUser._id}
                            />
                          )
                        )
                      }
                    </>
                  ) 
                : (
                    <div className="alert alert-secondary text-center">
                      <strong>No Chat:</strong> Open a conversation to start a chat
                    </div>
                  )
              }
              
            </ScrollToBottom>
            <div className='chatBoxBottom'>
                <input 
                    type="text" className="chatInput" 
                    placeholder="Type a message"
                    ref={newMessage} 
                    onKeyUp={handleKeyUp}
                  />

                <button 
                  className="btn btn-sm btn-primary" 
                  disabled={currentChat._id ? false : true}  
                  onClick={handleSendClick}
                >
                  <NearMe />
                </button>
              </div>
          </div>
        </div>

        <div className="chatOnline col-md-3">
          <div className="chatOnlineWrapper chatUniform">
            <div className='onlineTitleDiv'>
              <span className='onlineTitle'>Online Friends</span>
            </div>

            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
          </div>
        </div>
      </div>
    </div>
  )
}


const mapStateToProps = (state) => {
  const {auth, messenger} = state;

  return {
    currentUser : auth.user,
    conversations: messenger.conversations,
    messages: messenger.messages
  }
}



export default connect(mapStateToProps, {getConversationsAction, getMessagesAction, 
  postMessageAction})(Messenger);