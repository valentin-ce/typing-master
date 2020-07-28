import React, { useState } from 'react'
import '../../style/Form.scss'
import axios from 'axios';

export default function Register({ handleClose, show }) {
  const pathLogo = process.env.REACT_APP_STATIC_IMG_PATH;
  const pathServer = process.env.REACT_APP_SERVER_PATH;

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

  const sendRequest = () => {
    const payload = {
      username: state.username,
      email: state.email,
      password: state.password,
    };
    axios
      .post(`${pathServer}/auth/signup`, payload)
      .then(function (response) {
        console.log(response.data)
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
              <button onClick={handleClose}>close</button>
            <form onSubmit={handleSubmit}>
              <div className="form-logo">
                <img src={`${pathLogo}/fingerprint.svg`} alt="typing-master-logo" />
              </div>
              <h2 className="form-title">Typing-skills</h2>
              {isError && (
              <div className="error-msg">
                <div>{messageError}</div>
              </div>
              )}
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
            </form >
          </div>
        </div>
      </div>
    </div>
  )
}
