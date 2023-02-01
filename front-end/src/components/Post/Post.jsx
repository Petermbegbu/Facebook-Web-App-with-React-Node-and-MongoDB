import React, { useState, useEffect } from 'react';
import {MoreVert, ThumbUp, Favorite} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import {format} from "timeago.js";
import axios from "axios";

import "./Post.css";



export default function Post({post}) {
  
  //set like or dislike
  const [like, setLike] = useState(post.likes.length);
  const [isLike, setIsLike] = useState(false);

  //set user from Database
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/api/user/get/${post._userId}`);

      setUser(res.data);
    }

    fetchUser();
  }, [post._userId])


  const likeHandler = () => {
    setLike(isLike? like - 1 : like + 1);
    setIsLike(!isLike);
  }

  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
              <Link to={`/profile/${user.username}/${user._id}`}>
                <img src={user.profilePicture || "/images/persons/emptyProfileImage.jpg"} 
                  alt="" className="postProfileImg" />
              </Link>
              <span className="postUsername">{user.username}</span>
              <span className="postDate">{format(post.createdAt)}</span>
            </div>
            <div className="postTopRight">
                <MoreVert />
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post.desc}</span>
            <img src={post.img} alt="" className="postImg" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <ThumbUp htmlColor='#1877F2' className='postLikeIcon' onClick={likeHandler}/>
                <Favorite htmlColor='red' className='postLikeIcon' onClick={likeHandler}/>
                <span className="postLikeCounter">{like}</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">Comments</span>
            </div>
        </div>
      </div>
    </div>
  )
}
