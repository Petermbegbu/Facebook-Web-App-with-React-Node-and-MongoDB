import React from 'react';
import {RssFeed, Chat, PlayCircleFilled, Groups, Bookmark, Help, Work, Event, School, 
  ArrowDropDownCircle } from '@mui/icons-material';

import "./Leftbar.css";

export default function Leftbar() {
  return (
    <div className='leftbarBody'>
      <div className='leftbarWrapper'>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed htmlColor='green' className='sidebarIcon'/>
            <span className="sidebarListText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat htmlColor='#1877F2' className='sidebarIcon'/>
            <span className="sidebarListText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilled htmlColor='red' className='sidebarIcon'/>
            <span className="sidebarListText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Groups className='sidebarIcon'/>
            <span className="sidebarListText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark htmlColor='gold' className='sidebarIcon'/>
            <span className="sidebarListText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <Help htmlColor='brown' className='sidebarIcon'/>
            <span className="sidebarListText">Help</span>
          </li>
          <li className="sidebarListItem">
            <Work htmlColor='violet' className='sidebarIcon'/>
            <span className="sidebarListText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event htmlColor='green' className='sidebarIcon'/>
            <span className="sidebarListText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School htmlColor='blue' className='sidebarIcon'/>
            <span className="sidebarListText">Courses</span>
          </li>

          <li className="sidebarListItem">
            <ArrowDropDownCircle className='sidebarIcon'/>
            <span className="sidebarListText">See more</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
