import React, {useState} from 'react'
import {Link} from "react-router-dom"
import {Search, Person, Chat, Notifications} from '@mui/icons-material';
import { connect } from 'react-redux';

import { logoutAction } from '../../redux/actionCreators/authCreators';
import { EMPTY_IMAGE_PATH } from '../../variables';
import "./TopBar.css";


 const TopBar = (props) => {
  const {user, logoutAction} = props;

  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    await logoutAction();
  }

  window.addEventListener("click", () => {
    setOpen(false);
  })


  const handleMouseOver = () => {
    setOpen(true);
  }

  const handleMouseLeave = () => {
    setOpen(false);
  }


  return (
    <div className='topbarContainer sticky-top row'>

      {/* Topbar left */}
      <div className='topbarLeft col-md-4 py-2'>
        <Link to="/" className='logoLink'>
          <span className="logo">PUM</span>
        </Link>
      </div>

        {/* Topbar Center */}
      <div className='topbarCenter col-md-4 py-2'>
        <div className="searchDiv">
            <Search className='searchIcon'/>
            <input placeholder='Search for friends, post or videos' type="text" className="searchInput" />
        </div>
      </div>

        {/* Topbar Right */}
      <div className='topbarRight col-md-4 py-2'>

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

        <div className='imgDropdown'>
          <img src={user.profilePicture ? user.profilePicture : EMPTY_IMAGE_PATH} 
            alt="" className="topbarImg" onMouseOver={handleMouseOver} />

          {
            open && (
              <ul className='menuDiv' onMouseLeave={handleMouseLeave}>
                <li><Link to={"/"} className='dropdownLink'>Timeline</Link></li>
                <li><Link to={`/profile/${user.username}/${user._id}`} className='dropdownLink'>Profile</Link></li>
                <li><hr className='dropdownHr'/></li>
                <li><span className="dropdownLink" onClick={handleLogout}>Logout</span></li>
              </ul>
            )
          }
          
        </div>
        
          
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


export default connect(mapStateToProps, {logoutAction})(TopBar);