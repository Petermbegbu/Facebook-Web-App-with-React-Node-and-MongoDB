import React from 'react';
import {MoreVert, ThumbUp, Favorite} from '@mui/icons-material';

import "./Post.css";

export default function Post() {
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img src="/images/persons/profile1.jpg" alt="" className="postProfileImg" />
                <span className="postUsername">Peter Mbegbu</span>
                <span className="postDate">5 mins ago</span>
            </div>
            <div className="postTopRight">
                <MoreVert />
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">Hello guys, i havent posted for a while</span>
            <img src="/images/posts/beer.jpg" alt="beer" className="postImg" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <ThumbUp htmlColor='#1877F2' className='postLikeIcon'/>
                <Favorite htmlColor='red' className='postLikeIcon'/>
                <span className="postLikeCounter">43</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">9 Comments</span>
            </div>
        </div>
      </div>
    </div>
  )
}
