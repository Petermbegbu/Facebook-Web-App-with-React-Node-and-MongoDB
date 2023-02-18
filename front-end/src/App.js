import React from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { connect } from "react-redux";

import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Messenger from "./pages/Messenger/Messenger";
import Home from "./pages/home/Home";
import "./App.css";

function App(props) {
  const {user} = props;

  return (
    <div className="appContainer">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ user ? <Home /> : <Navigate to="/login" /> } />
          <Route exact path="/profile/:username/:userID" element={<Profile />} />
          <Route exact path="/register" element={user ? <Navigate to="/" /> : <Register />} />
          <Route exact path="/login" element={ user ? <Navigate to="/" /> : <Login />} />
          <Route exact path="/messenger" element={<Messenger />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}


const mapStateToProps  = (state) => {
  const {auth} = state;

  return {
    user: auth.user
  }
}


export default connect(mapStateToProps)(App);
