import React from "react"

import TopBar from "../../components/TopBar/TopBar";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import Leftbar from "../../components/Leftbar/Leftbar";
import "./Home.css";

function Home() {
  return (
    <div>
      <div>
        <TopBar />
      </div>

      <div className="homeBody">
        <Leftbar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  )
}

export default Home;