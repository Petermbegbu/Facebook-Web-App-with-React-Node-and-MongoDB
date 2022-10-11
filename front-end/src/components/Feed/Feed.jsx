import React from 'react';

import Share from '../Share/Share';
import Post from '../Post/Post';
import "./Feed.css";

export default function Feed() {
  return (
    <div className='feedBody'>
      <div className="feedWrapper">
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}
