import React from "react"
import { connect } from "react-redux";

import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import Leftbar from "../../components/Leftbar/Leftbar";
import TopBar from "../../components/TopBar/TopBar";
import "./Home.css";

const Home = (props) => {
  const {user} = props;
  

  return (
    <div className="homeContainer">
      <TopBar />
      
      <div className="homeBody row">
        <div className="homeLeft col-md-3">
          <Leftbar />
        </div>

        <div className="homeFeed col-md-6">
          <Feed profile={false} user={user}/>
        </div>
        <div className="homeRight col-md-3">
          <Rightbar />
        </div>
      </div>
    </div>
  )
}


const mapStateToProps = (state) => {
  const {auth} = state;

  return {
    user: auth.user
  }
}


export default connect(mapStateToProps)(Home);