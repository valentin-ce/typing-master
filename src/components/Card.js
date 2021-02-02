import React, { useContext, useState, useEffect } from 'react';
import '../style/Card.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import context from '../context/context'

function Card({item, title, coveredletter, gamemod, difficulty}) {

  const { mapInfo, setMapInfo } = useContext(context)
  

  return (
    <div className="card">
      <div className="card-gradiant-border">
        <div className="card-content">
          <h3 className="card-favorite-title">{title}</h3>
          <div className="card-info">
            <p><span className="covered-letter">lettre: {coveredletter}</span></p>
            <p><span className="game-mod">gamemod: {gamemod}</span></p>
            <p><span className="difficulty">{difficulty}</span></p>
          </div>
          <div className="card-synopsis">
          </div>
          <div className="card-footer">
            <Link 
            to={`/Game?coveredletter=${coveredletter}&title=${title}&gamemod=${gamemod}`}
            >start</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;