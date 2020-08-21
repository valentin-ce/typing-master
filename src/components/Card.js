import React, { useContext, useState, useEffect } from 'react';
import '../style/Card.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card({item, title, coveredletter, gamemod, difficulty}) {

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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;