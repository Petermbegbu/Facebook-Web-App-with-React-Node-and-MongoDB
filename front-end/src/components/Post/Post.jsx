import React, { useState, useEffect } from 'react';
import {MoreVert, ThumbUp, Favorite} from '@mui/icons-material';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {format} from "timeago.js";
import axios from "axios";

import "./Post.css";
import { EMPTY_IMAGE_PATH } from '../../variables';



const Post = (props) => {
  const {post, currentUser} = props;

  //set like or dislike
  const [like, setLike] = useState(post.likes.length);
  const [isLike, setIsLike] = useState(false);

  //set user from Database
  const [user, setUser] = useState({});


  useEffect(() => {
    setIsLike(post.likes.includes(currentUser._id));

  }, [post.likes, currentUser._id])


  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/api/user/get/${post._userId}`);

      setUser(res.data);
    }

    fetchUser();
  }, [post._userId])


  const likeHandler = async () => {
    await axios.patch(`/api/post/like/${post._id}`, {_userId: currentUser._id});

    setLike(isLike ? like - 1 : like + 1);
    setIsLike(!isLike);
  }

  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
              <Link to={`/profile/${user.username}/${user._id}`}>
                <img src={user.profilePicture || EMPTY_IMAGE_PATH} alt="" className="postProfileImg" />
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
            <img src={`/api/post/image/${post._id}`} alt="" className="postImg" />
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


const mapStateToProps = (state) => {
  const {auth} = state;

  return {
    currentUser: auth.user
  }
}

export default connect(mapStateToProps)(Post);