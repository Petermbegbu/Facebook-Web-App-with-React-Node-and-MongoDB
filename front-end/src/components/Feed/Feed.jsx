import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import Share from '../Share/Share';
import Post from '../Post/Post';
import { getProfilePostsAction, getTimelinePostsAction } from '../../redux/actionCreators/postCreators';
import "./Feed.css";


const Feed = (props) => {
  const {profile, user, currentUser, timelinePosts, profilePosts, getProfilePostsAction, getTimelinePostsAction} = props;

  const posts = profile ? profilePosts : timelinePosts;
    
  //Sort post according to date posted. The newest post must be on top of the list
  posts.sort((post1, post2) => {
    return post1 && post2 && new Date(post2.createdAt) - new Date(post1.createdAt);
  })


  useEffect(() => {
    const getPosts = async () => {
      profile 
        ? await getProfilePostsAction(user._id) 
        : await getTimelinePostsAction(user._id);
    }

    getPosts();
  }, [user._id])


  return (
    <div className='feedBody'>
      <div className="feedWrapper">
        { currentUser._id === user._id && <Share />}

        {/* render posts */}
        {
          posts.map(post => post && <Post key={post._id} post={post} />)
        }
       
      </div>
    </div>
  )
}


const mapStateToProps = (state) => {
  const {posts, auth} = state;

  return {
    profilePosts: posts.profilePosts,
    timelinePosts: posts.timelinePosts,
    currentUser: auth.user
  }
}


export default connect(mapStateToProps, 
  {getProfilePostsAction, getTimelinePostsAction})(Feed);