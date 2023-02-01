import React, {useEffect, useState} from 'react';
import axios from "axios";

import Share from '../Share/Share';
import Post from '../Post/Post';
import "./Feed.css";

export default function Feed({userID, profile}) {
  const [posts, setPosts] = useState([]); 


  useEffect(() => {
    const fetchPost = async () => {

      if (userID) {
        const res = profile
        ? await axios.get(`/api/post/get/profile/${userID}`) 
        : await axios.get(`/api/post/get/timeline/${userID}`);
      
        setPosts(res.data);
      }
      
    }

    fetchPost();
  }, [userID])

  return (
    <div className='feedBody'>
      <div className="feedWrapper">
        <Share />

        {/* render posts */}
        {
          posts.map( post => <Post key={post._id} post={post} />)
        }
       
      </div>
    </div>
  )
}
