import React, { useState, useContext } from 'react'
import '../../style/Form.scss'
import axios from 'axios';
import Context from '../../context/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Register({ handleClose, show }) {
  const pathLogo = process.env.REACT_APP_STATIC_IMG_PATH;
  const pathServer = process.env.REACT_APP_SERVER_PATH;

  const { isAuthenticated, setIsAuthenticated } = useContext(Context)

  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  })

  const [token, setToken] = useState();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [messageError, setMessageError] = useState("");

  /**
   * use to create an user account
   * @param {string} username
   * @param {string} email
   * @param {string} password
   * @return token
   */
  const sendRequest = () => {
    const payload = {
      username: state.username,
      email: state.email,
      password: state.password,
    };
    axios
      .post(`${pathServer}/auth/signup`, payload)
      .then(function (response) {
        setIsAuthenticated(response.data.token)
        localStorage.setItem('token', response.data.token)
        setToken(response.data.token)
        setLoggedIn(true)
        handleClose()
      })
      .catch(function (error) {
        console.log(error.response)
        setIsError(true);
        setMessageError(error.response.data.error)
      });
  };

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
    <div style={show ? { display: "block" } : { display: "none" }}>
      <div className="form-overlay">
        <div className="form-wrapper">
          <div className="form">
            <div className="form-close-icon">
            <FontAwesomeIcon
              className="close-btn"
              onClick={handleClose}
              icon={['fas', 'times-circle']} size="lg" />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-header">
                <div className="form-logo">
                  <img src={`${pathLogo}/fingerprint.svg`} alt="typing-master-logo" />
                </div>
                <h2 className="form-title">Typing-skill</h2>
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
                  type="username"
                  id="username"
                  placeholder="username :"
                  value={state.username}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  id="password"
                  placeholder="Password :"
                  value={state.password}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  id="passwordConfirmation"
                  placeholder="Password confirmation :"
                  value={state.passwordConfirmation}
                  onChange={handleChange}
                />
              </div>
              <div className="form-bot">
                <div className="form-link">Already have an account ?</div>
                <button className="btn-base">S'inscrire</button>
              </div>
              </div>
            </form >
          </div>
        </div>
      </div>
    </div>
  )
}
