import React, { useState } from 'react';
import {MoreVert, ThumbUp, Favorite} from '@mui/icons-material';

import { Users } from '../../dummyData';
import "./Post.css";



export default function Post({post}) {
  
  //Getting the username
  const user = Users.filter(user => user.id === post.id)
  const {username, profilePicture} = user[0];

  const [like, setLike] = useState(post.like);
  const [isLike, setIsLike] = useState(false);

  const likeHandler = () => {
    setLike(isLike? like - 1 : like + 1);
    setIsLike(!isLike);
  }

  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img src={profilePicture} alt="" className="postProfileImg" />
                <span className="postUsername">{username}</span>
                <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">
                <MoreVert />
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post.desc}</span>
            <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <ThumbUp htmlColor='#1877F2' className='postLikeIcon' onClick={likeHandler}/>
                <Favorite htmlColor='red' className='postLikeIcon' onClick={likeHandler}/>
                <span className="postLikeCounter">{like}</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">{post.comment} Comments</span>
            </div>
        </div>
      </div>
    </div>
  )
}
