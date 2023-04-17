import React from 'react';
import {format} from "timeago.js";
import { EMPTY_IMAGE_PATH } from '../../variables';

import "./Message.css";

export default function Message(props) {
  const {message, mine} = props;


  return (
    <div className={mine ? "d-flex justify-content-end px-2 py-1" : "d-flex justify-content-start px-2 py-1"}>
        <div className={mine ? "messageBox mine" : "messageBox other"}>
            <div className='messageTop'>
              <img src={message.profilePicture.url || EMPTY_IMAGE_PATH} alt="" className="messageImg" />
              <div>
                <p className="messageName">{message.username}</p>
                <p className="messageText">{message.message.text}</p>
              </div>
            </div>
            <div className='messageBottom'>
              <span className='messageTime'>{format(message.message.createdAt)}</span>
            </div>
        </div>
    </div>
  )
}
