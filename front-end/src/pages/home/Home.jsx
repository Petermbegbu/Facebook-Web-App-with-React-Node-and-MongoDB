import React from "react"

import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import Leftbar from "../../components/Leftbar/Leftbar";
import "./Home.css";

function Home() {
  return (
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
  )
}

export default Home;