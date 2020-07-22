import React, { useState } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const pathLogo = process.env.REACT_APP_STATIC_IMG_PATH;

  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const showFormSignUp = () => {
    if (showSignUp) {
      setShowSignUp(false)
    }
    else {
      setShowSignIn(false)
      setShowSignUp(true)
    }
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

  return (
    <div className="App">
      <div className="navbar">
        <ul className='navbar-list'>
          <li className="nav-item"
          onClick={e => {showFormSignUp()}}
          >Register</li>
          <li className="nav-item"
          onClick={e => {showFormSignIn()}}
          >Login</li>
        </ul>
      </div>
      <div className="landing-container"
      style={showSignIn || showSignUp ? {display: "none"} : {display: "block"}}
      >
        <h1 className="landing-title">
          Typing Master
      </h1>
        <h2 className="landing-text">
          Learn to write
      </h2>
        <div className="landing-logo">
          <img src={`${pathLogo}/fingerprint.svg`} alt="typing-master-logo" />
        </div>
      </div>
      <div className="login-form"
      style={showSignIn ? {display: "block"} : {display: "none"} }
      >
        <Login></Login>
      </div>
      <div className="login-form"
      style={showSignUp ? {display: "block"} : {display: "none"} }
      >
        <Register></Register>
      </div>

    </div>
  );
}

export default App;