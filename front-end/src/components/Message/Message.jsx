import React from 'react';
import {format} from "timeago.js";

import "./Message.css";

export default function Message(props) {
  const {message, mine} = props;

  return (
    <div className={mine ? "d-flex justify-content-end px-2 py-1" : "d-flex justify-content-start px-2 py-1"}>
        <div className={mine ? "messageBox mine" : "messageBox other"}>
            <div className='messageTop'>
                <img src="/images/persons/profile1.jpg" alt="" className="messageImg" />
                <span className="messageText">{message.text}</span>
            </div>
            <div className='messageBottom'>
                <span className='messageTime'>{format(message.createdAt)}</span>
            </div>
        </div>
    </div>
  )
}
