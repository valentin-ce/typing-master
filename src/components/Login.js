import React, {useState} from 'react'
import '../style/Form.scss'

export default function Login() {
    const pathLogo = process.env.REACT_APP_STATIC_IMG_PATH;

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
              type="password"
              id="password"
              placeholder="Password :"
              value={state.password}
              onChange={handleChange}
            />
            </div>
            <div className="form-bot">
                <div className="form-link">Don't have an account ?</div>
                <button className="btn-base">S'identifier</button>
            </div>
        </form>
    )
}
