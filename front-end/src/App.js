import React from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { connect } from "react-redux";
import useLocalStorage from "use-local-storage";

import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Messenger from "./pages/Messenger/Messenger";
import Home from "./pages/home/Home";
import { ThemeContext } from "./contextAPI";
import "./App.css";

function App(props) {
  const {user} = props;

  const [theme, setTheme] = useLocalStorage('')


  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  return (
    <ThemeContext.Provider value={{switchTheme}}>
      <div className="appContainer" data-theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={ user ? <Home /> : <Navigate to="/login" /> } />
            <Route exact path="/profile/:username/:userID" element={<Profile />} />
            <Route exact path="/register" element={user ? <Navigate to="/" /> : <Register />} />
            <Route exact path="/login" element={ user ? <Navigate to="/" /> : <Login />} />
            <Route exact path="/messenger" element={user ? <Messenger /> : <Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  )
}


const mapStateToProps  = (state) => {
  const {auth} = state;

  return {
    user: auth.user
  }
}


export default connect(mapStateToProps)(App);
