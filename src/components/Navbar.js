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


  const token = localStorage.getItem('token')
  console.log(token)


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
          <ul className="navbar-list" style={!token ? { display: "flex" } : { display: "none" }}>
            <li className="nav-item">
              <Link className="link" to="/Register">Register</Link>
              </li>
            <li className="nav-item">
              <Link className="link" to="/Login">Login</Link>
              </li>
          </ul>
          </div>
        </div>
      </div>
  )
}
