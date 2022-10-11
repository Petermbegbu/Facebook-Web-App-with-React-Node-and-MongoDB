import React from 'react'
import {Search, Person, Chat, Notifications} from '@mui/icons-material';
import "./TopBar.css";

export default function TopBar() {
  return (
    <div className='topbarContainer'>

        {/* Topbar left */}
      <div className='topbarLeft'>
        <span className="logo">Chestbook</span>
      </div>

        {/* Topbar Center */}
      <div className='topbarCenter'>
        <div className="searchDiv">
            <Search className='searchIcon'/>
            <input placeholder='Search for friends, post or videos' type="text" className="searchInput" />
        </div>
      </div>

        {/* Topbar Right */}
      <div className='topbarRight'>

        <div className="topbarLinkDiv">
            <span className="topbarLink">Home</span>
            <span className="topbarLink">Timeline</span>
        </div>

        <div className="topbarIcons">
            <div className='topbarIconItem'>
                <Person />
                <span className="topbarIconBadge">1</span>        
            </div>
            <div className='topbarIconItem'>
                <Chat />
                <span className="topbarIconBadge">2</span>        
            </div>
            <div className='topbarIconItem'>
                <Notifications />
                <span className="topbarIconBadge">1</span>        
            </div>
        </div>

        <img src="/images/persons/profile1.jpg" alt="" className="topbarImg" />
      </div>

    </div>
  )
}
