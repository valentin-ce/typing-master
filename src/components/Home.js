import React, { useContext } from 'react'
import context from '../context/context'

export default function Home() {
    const { isAuthenticated } = useContext(context);
    const pathLogo = process.env.REACT_APP_STATIC_IMG_PATH;
    console.log(isAuthenticated)

    return (
        <div className="App">
            <div className="landing-container">
                <div className="logo-container">
                <div class="gradient-border">
                    <div className="landing-logo">
                        <img className="logo" src={`${pathLogo}/fingerprintVanilla.svg`} alt="typing-master-logo" />
                    </div>
                </div>
                </div>
                <h1 className="landing-title">
                    Typing-Skill
                </h1>
                <h2 className="landing-text">
                    Learn to type_
                </h2>
            </div>
        </div>
    )
}