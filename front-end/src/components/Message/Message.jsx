import React from 'react'

import "./Message.css";

export default function Message({mine}) {
  return (
    <div className={mine ? "d-flex justify-content-end" : ""}>
        <div className={mine ? "messageBox mine" : "messageBox"}>
            <div className='messageTop'>
                <img src="/images/persons/profile1.jpg" alt="" className="messageImg" />
                <span className="messageText">Testing my text message. Testing my text message.</span>
            </div>
            <div className='messageBottom'>
                <span className='messageTime'>5:30pm</span>
            </div>
        </div>
    </div>
  )
}
