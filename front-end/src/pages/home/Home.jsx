import React from "react"

import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import Leftbar from "../../components/Leftbar/Leftbar";
import TopBar from "../../components/TopBar/TopBar";
import "./Home.css";

function Home() {
  return (
    <div>
      <TopBar />
      
      <div className="homeBody row">
        <div className="homeLeft col-md-3">
          <Leftbar />
        </div>

        <div className="homeFeed col-md-6">
          <Feed />
        </div>

        <div className="homeRight col-md-3">
          <Rightbar />
        </div>
      </div>
    </div>
  )
}

export default Home;