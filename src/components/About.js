import React from 'react'
import '../style/Key.scss'


export default function About() {
    return (
        <div>
            <h3 className="about-title">How it's work ?</h3>
            <div className="keyboard">
            <div className="nb-line">
                <div className="key PinkyLeft">1</div>
                <div className="key RingFingerLeft">2</div>
                <div className="key MiddleFingerLeft">3</div>
                <div className="key IndexFingerLeft">4</div>
                <div className="key IndexFingerLeft">5</div>
                <div className="key IndexFingerRight">6</div>
                <div className="key IndexFingerRight">7</div>
                <div className="key MiddleFingerRight">8</div>
                <div className="key RingFingerRight">9</div>
                <div className="key PinkyRight">0</div>
            </div>
            <div className="top-line">
                <div className="key PinkyLeft">A</div>
                <div className="key RingFingerLeft">Z</div>
                <div className="key MiddleFingerLeft">E</div>
                <div className="key IndexFingerLeft">R</div>
                <div className="key IndexFingerLeft">T</div>
                <div className="key IndexFingerRight">Y</div>
                <div className="key IndexFingerRight">U</div>
                <div className="key MiddleFingerRight">I</div>
                <div className="key RingFingerRight">O</div>
                <div className="key PinkyRight">P</div>
            </div>
            <div className="middle-line">
                <div className="key PinkyLeft">Q</div>
                <div className="key RingFingerLeft">S</div>
                <div className="key MiddleFingerLeft">D</div>
                <div className="key IndexFingerLeft">F</div>
                <div className="key IndexFingerLeft">G</div>
                <div className="key IndexFingerRight">H</div>
                <div className="key IndexFingerRight">J</div>
                <div className="key MiddleFingerRight">K</div>
                <div className="key RingFingerRight">L</div>
                <div className="key PinkyRight">M</div>
            </div>
            <div className="bottom-line">
                <div className="key PinkyLeft">W</div>
                <div className="key RingFingerLeft">X</div>
                <div className="key MiddleFingerLeft">C</div>
                <div className="key IndexFingerLeft">V</div>
                <div className="key IndexFingerLeft">B</div>
                <div className="key IndexFingerRight">N</div>
                <div className="key IndexFingerRight">?</div>
                <div className="key MiddleFingerRight">.</div>
                <div className="key RingFingerRight">/</div>
                <div className="key PinkyRight">§</div>
            </div>
            <div className="space-line">
                <div className="key spaceBar">_</div>
            </div>
            </div>
        </div>
    )
}
