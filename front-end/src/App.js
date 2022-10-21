import React from "react";

import Profile from "./pages/Profile/Profile";
import TopBar from "./components/TopBar/TopBar";
import Home from "./pages/home/Home";
import "./App.css";

function App() {
  return (
    <div className="appBody">
      <TopBar />

      <div className="appBottomBody">
        <Profile />
      </div>
    </div>
  )
}

export default App;
