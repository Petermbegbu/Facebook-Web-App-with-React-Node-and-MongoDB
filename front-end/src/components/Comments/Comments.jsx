import React, { useRef } from 'react';
import axios from "axios";
import { format } from "timeago.js";
import { Send } from '@mui/icons-material';

import { EMPTY_IMAGE_PATH } from '../../variables';
import "./Comments.css";


function Comments(props) {
  const {post, currentUser, comments, setComments} = props;

  const commentText = useRef();

  const handleCommentSend = async () => {
    const text = commentText.current.value;

    if (text.trim() === "") return;

    const data = {
      text: text,
      _userId: currentUser._id,
      _postId: post._id
    }

    const res = await axios.post("/api/comment/add", {data})

    setComments([...comments, {...res.data, username: currentUser.username, profilePicture: currentUser.profilePicture}])

    commentText.current.value = "";
  }

  return (
    <div className='commentOuterDiv'>
        <hr className='commentHr'/>
        <div className='commentSection'>
          {
            comments.map((comment) => (
              <div className="commentDiv" key={comment._id}>
                <img src={comment.profilePicture || EMPTY_IMAGE_PATH} alt="" className='commentImg'/>
                <div className="commentInfo">
                  <p className='commentName'>{comment.username}</p>
                  <p className='commentDesc'>{comment.text}</p>
                  <b className='commentDate'>{format(comment.createdAt)}</b>
                </div>
              </div>
            ))
          }
        </div>

        <div className='writeDiv sticky-bottom'>
            <img src={currentUser.profilePicture || EMPTY_IMAGE_PATH} alt="" className="commentProfileImg"/>
            <input type="text" className='commentInput' placeholder='Write a comment' ref={commentText}/>
            <Send className='commentSendIcon' onClick={handleCommentSend}/>
        </div>
    </div>
  )
}

export default Comments
