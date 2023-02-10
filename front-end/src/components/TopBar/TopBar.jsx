import React from 'react'
import {Link} from "react-router-dom"
import {Search, Person, Chat, Notifications} from '@mui/icons-material';
import { connect } from 'react-redux';
import { EMPTY_IMAGE_PATH } from '../../variables';

import "./TopBar.css";


 const TopBar = (props) => {
  const {user} = props;


  return (
    <div className='topbarContainer'>

      {/* Topbar left */}
      <div className='topbarLeft'>
        <Link to="/" className='logoLink'>
          <span className="logo">PUM</span>
        </Link>
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

        <Link to={`/profile/${user.username}/${user._id}`}>
          <img src={user.profilePicture ? user.profilePicture : EMPTY_IMAGE_PATH} 
            alt="" className="topbarImg" />
        </Link>
      </div>

    </div>
  )
}


const mapStateToProps = (state) => {
  const {auth} = state;

  return {
    user: auth.user,
  }
}


export default connect(mapStateToProps)(TopBar);