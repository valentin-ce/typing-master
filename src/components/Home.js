import React,{useContext} from 'react'
import context from '../context/context'

export default function Home() {
    const {isAuthenticated} = useContext(context);
    const pathLogo = process.env.REACT_APP_STATIC_IMG_PATH;
    console.log(isAuthenticated)

    return (
        <div className="App">
            <div className="landing-container">
                <h1 className="landing-title">
                    Typing-Skills
                </h1>
                <h2 className="landing-text">
                    Learn to write
                </h2>
                <div className="landing-logo">
                    <img src={`${pathLogo}/fingerprint.svg`} alt="typing-master-logo" />
                </div>
            </div>
        </div>
    )
}