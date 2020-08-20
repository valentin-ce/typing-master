import React, { useState, useContext } from 'react'
import '../../style/Form.scss'
import axios from 'axios';
import Context from '../../context/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";


export default function Login({ handleClose, show }) {
  const pathLogo = process.env.REACT_APP_STATIC_IMG_PATH;
  const pathServer = process.env.REACT_APP_SERVER_PATH;

  const { isAuthenticated, setIsAuthenticated } = useContext(Context)

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [messageError, setMessageError] = useState("");
  console.log(isAuthenticated)

  /**
   * Use to login user
   * @param {string} email
   * @param {string} password
   * @return token 
   */
  const sendRequest = () => {
    const payload = {
      email: state.email,
      password: state.password,
    };
    axios
      .post(`${pathServer}/api/v1/auth/signin`, payload)
      .then(function (response) {
        console.log(response.data)
        setIsAuthenticated(response.data.token)
        localStorage.setItem('token', response.data.token);
        setLoggedIn(true)
      })
      .catch(function (error) {
        console.log(error)
        setIsError(true);
        setMessageError(error.response.data)
      });
  };

  const [state, setState] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState({
      ...state,
      [id]: value,
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    sendRequest();
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-header">
      <div className="logo-container">
        <div className="gradient-border">
          <div className="landing-logo">
            <img className="logo" src={`${pathLogo}/fingerprintVanilla.svg`} alt="typing-master-logo" />
          </div>
        </div>
      </div>
          <h2 className="form-title">Typing-skills</h2>
        </div>
        <div className="form-body">
          <div className="error-box">
            {isError && (
              <div className="error-msg">
                <FontAwesomeIcon
                  className="finger-print"
                  icon={['fas', 'fingerprint']} size="lg" />
                <div>{messageError}</div>
              </div>
            )}
          </div>
          <div className="form-input">
            <input
              type="email"
              id="email"
              placeholder="email :"
              value={state.email}
              onChange={handleChange}
            />
            <input
              type="password"
              id="password"
              placeholder="Password :"
              value={state.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-bot">
            <Link className="link" to="/Register">Pas de compte ?</Link>
            <button
              className="btn-base">S'identifier</button>
          </div>
        </div>
      </form>
    </div>
  )
}
