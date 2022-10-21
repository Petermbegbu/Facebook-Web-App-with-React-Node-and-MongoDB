import React from 'react';

import Share from '../Share/Share';
import Post from '../Post/Post';
import { Posts } from '../../dummyData';
import "./Feed.css";

export default function Feed() {
  return (
    <div className='feedBody'>
      <div className="feedWrapper">
        <Share />

        {/* render posts */}
        {
          Posts.map( post => <Post key={post.id} post={post} />)
        }
       
      </div>
    </div>
  )
}
