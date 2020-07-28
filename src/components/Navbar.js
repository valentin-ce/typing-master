import React, { useState, useContext } from 'react'
import Login from './forms/Login'
import Register from './forms/Register'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import Context from '../context/context';

export default function Navbar() {

  const {isAuthenticated, setIsAuthenticated} = useContext(Context)

  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const token = localStorage.getItem('token')

  const showFormSignUp = () => {
    if (showSignUp) {
      setShowSignUp(false)
    }
    else {
      setShowSignIn(false)
      setShowSignUp(true)
    }
  }
  const hideFormSignIn = () => {
    setShowSignIn(false);
  }
  const hideFormSignUp = () => {
    setShowSignUp(false)
  }

  const showFormSignIn = () => {
    if (showSignIn) {
      setShowSignIn(false)
    }
    else {
      setShowSignUp(false)
      setShowSignIn(true);
    }
  }

  const logout = () => {
    setIsAuthenticated('');
    localStorage.clear('token');
    window.location.reload();
  }

  return (
    <div>
      <div className="navbar">
        <div className="navbar-left">
          <ul className="navbar-list-left">
            <li className="nav-item">
              <Link to="/home">Home</Link>
              </li>
            <li className="nav-item">
              <Link to="/Play">Play</Link>
            </li>
            <li className="nav-item">
              <Link to="/Score">Score</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">Contact</Link>
              </li>
          </ul>
        </div>
        <div className="navbar-right">
          <ul className='navbar-list-right' style={token ? { display: "flex" } : { display: "none" }}>
            <li className="nav-item"
              onClick={e => { logout() }}
            >Logout</li>
          </ul>
          <ul classname="navbar-list" style={!token ? { display: "flex" } : { display: "none" }}>
            <li className="nav-item"
              onClick={e => { showFormSignUp() }}
            >Register</li>
            <li className="nav-item"
              onClick={e => { showFormSignIn() }}
            >Login</li>
          </ul>
          </div>
        </div>
        <div className="login-form">
          <Login show={showSignIn} handleClose={hideFormSignIn}></Login>
        </div>
        <div className="login-form">
          <Register show={showSignUp} handleClose={hideFormSignUp}></Register>
        </div>
      </div>
  )
}
