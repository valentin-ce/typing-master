import React, { useState, useContext } from 'react'
import '../style/Navbar.scss';
import Login from './forms/Login'
import Register from './forms/Register'
import Profile from './Profile'
import {
  Link,
} from "react-router-dom";
import Context from '../context/context';

export default function Navbar() {

  const {isAuthenticated, setIsAuthenticated} = useContext(Context)

  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const token = localStorage.getItem('token')
  console.log(token)

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
              <Link className="link" to="/">Home</Link>
              </li>
            <li className="nav-item">
              <Link className="link" to="/About">About</Link>
              </li>
            <li className="nav-item">
              <Link className="link" to="/Play">Play</Link>
            </li>
            <li className="nav-item">
              <Link className="link" to="/Score">Score</Link>
            </li>
            <li className="nav-item">
              <Link className="link" to="/contact">Contact</Link>
              </li>
          </ul>
        </div>
        <div className="navbar-right">
          <ul className='navbar-list-right' style={token ? { display: "flex" } : { display: "none" }}>
            <li className="nav-item"
              onClick={e => { logout() }}
            >Logout</li>
            <li className="nav-item">
              <Link to="/profile" className="link">
                Settings
              </Link>
            </li>
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
