import React, {useState} from 'react'
import '../style/Form.scss'

export default function Register() {
    const pathLogo = process.env.REACT_APP_STATIC_IMG_PATH;

    const [state, setState] = useState({
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",

    })

    const handleChange = (e) => {
        const { id, value } = e.target;
        setState({
          ...state,
          [id]: value,
        });
      };

    return (
        <form>
            <div className="form-logo">
                <img src={`${pathLogo}/fingerprint.svg`} alt="typing-master-logo" />
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
        </form>
    )
}
