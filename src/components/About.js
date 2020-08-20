import React from 'react'
import '../style/Key.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function About() {
    return (
        <div>
            <h3 className="about-title">Comment ça marche ?</h3>
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
                <h3 className="about-title">Le code couleur :</h3>
                <div className="about-text">
                    <p>A l'aide de ce code visuel simple, vous pourrez facilement connaitre qu'elle doigt doit-étre utilisé sur quelle touche.
                        Le bleu foncé, par exemple correspont a votre petit doigt de la main gauche, c'est aussi simple que ça.
                    </p>
                </div>
            <div className="print-container">
                <div className="print-left">
                    <FontAwesomeIcon
                        className="finger printPinkyLeft"
                        icon={['fas', 'fingerprint']} size="2x" />
                    <FontAwesomeIcon
                        className="finger printRingFingerLeft"
                        icon={['fas', 'fingerprint']} size="2x" />
                    <FontAwesomeIcon
                        className="finger printMiddleFingerLeft"
                        icon={['fas', 'fingerprint']} size="2x" />
                    <FontAwesomeIcon
                        className="finger printIndexFingerLeft"
                        icon={['fas', 'fingerprint']} size="2x" />
                    <FontAwesomeIcon
                        className="finger printThumbLeft"
                        icon={['fas', 'fingerprint']} size="2x" />
                </div>

                <div className="print-right">
                    <FontAwesomeIcon
                        className="finger printThumbRight"
                        icon={['fas', 'fingerprint']} size="2x" />
                    <FontAwesomeIcon
                        className="finger printIndexFingerRight"
                        icon={['fas', 'fingerprint']} size="2x" />
                    <FontAwesomeIcon
                        className="finger printMiddleFingerRight"
                        icon={['fas', 'fingerprint']} size="2x" />
                    <FontAwesomeIcon
                        className="finger printRingFingerRight"
                        icon={['fas', 'fingerprint']} size="2x" />
                    <FontAwesomeIcon
                        className="finger printPinkyRight"
                        icon={['fas', 'fingerprint']} size="2x" />
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}
