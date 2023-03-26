import React, { useState, useEffect } from 'react';
import {MoreVert, ModeCommentOutlined, Favorite, FavoriteBorder} from '@mui/icons-material';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {format} from "timeago.js";
import axios from "axios";

import Comments from '../Comments/Comments';
import { EMPTY_IMAGE_PATH } from '../../variables';
import "./Post.css";




const Post = (props) => {
  const {post, currentUser} = props;

  const [like, setLike] = useState(post.likes.length);
  const [isLike, setIsLike] = useState(false);
  const [isComment, setIsComment] = useState(false);

  const [comments, setComments] = useState([]);

  //set user from Database
  const [user, setUser] = useState({});

  const profilePicture = user.profilePicture ? user.profilePicture.url : EMPTY_IMAGE_PATH;

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



  useEffect(() => {
    const getComments = async () => {
      try {
        const res = await axios.get(`/api/comment/get/${post._id}`)

        //Re-arranging the return value
        const commentList = res.data.map(({comment, profilePicture, username}) => {
          return {...comment, profilePicture, username}
        })

        setComments(commentList)
      } catch (err) {
        console.log(err)
      }
    }

    getComments();
  }, [post._id])



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
              <Link to={`/profile/${user.username}/${user._id}`} className="postProfileLink">
                <img src={profilePicture} alt="" className="postProfileImg" />
                <span className="postUsername">{user.username}</span>
              </Link>
              <span className="postDate">{format(post.createdAt)}</span>
            </div>
            <div className="postTopRight">
                <MoreVert />
            </div>
        </div>
        <div className="postCenter">
          <div className="postText">{post.desc}</div>
          <div className='postImgDiv'>
            <img src={post.img.url} alt="" className="postImg" />
          </div>
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
              {
                isLike 
                  ? <Favorite htmlColor='red' className='postLikeIcon' onClick={likeHandler}/>
                  : <FavoriteBorder htmlColor='red' className='postLikeIcon' onClick={likeHandler}/>
              }
              <span className="postLikeCounter">{like}</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentIconBlock" onClick={() => setIsComment(!isComment)}>
                  <ModeCommentOutlined className='postCommentIcon'/>
                  <span>{comments.length}</span>
                </span>
            </div>
        </div>

        <div>
          {
            isComment && <Comments currentUser={currentUser} post={post} comments={comments} setComments={setComments}/>
          }
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