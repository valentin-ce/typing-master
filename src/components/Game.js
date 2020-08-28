import React, { useContext, useState, useEffect } from 'react'
import context from '../context/context'
import '../style/Game.scss';

export default function Game() {

    const [keyPressed, setKeyPressed] = useState();

    // Handle user input
    useEffect(() => {
        const downHandler = (e) => {
            console.log(e.keyCode)
            setKeyPressed(e.keyCode);
        }
        const upHandler = () => {
            setKeyPressed(null);
        }

        window.addEventListener('keydown', downHandler);
        window.addEventListener('keyup', upHandler);
    })
    console.log(keyPressed)

    const { mapInfo } = useContext(context)
    const [arrayNumber, setArrayNumber] = useState([]);
    /*
    console.log(mapInfo.coveredLetter)
    const letter = mapInfo[3];
    console.log(letter);
    const str = letter.split('-');
    console.log(str)
    */




    const gameStart = () => {

        var result = '';
        var length = 50;
        /*
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        */
        const arrayStr = [];
        var characters = "LlQq "
        var charactersLength = characters.length;

        // Generate random string whith character
        for (var i = 0; i < length; i++) {
            result = characters.charAt(Math.floor(Math.random() * charactersLength));
            arrayStr.push(result)
        }
        const arrayNb = [];
        const str = result;

        // Convert letter to key code
        for (const element of arrayStr) {
            console.log(element)
            console.log(element.codePointAt())
            arrayNb.push(element.codePointAt())

        }
        setArrayNumber(arrayNb);
        console.log(arrayNb)
    }


    return (
        <div className="game-screen">

            <div className="game-key">
                {arrayNumber.map((item, i) => {
                    return (
                        <div key={i} id={i} className={'key key' + item}>{String.fromCodePoint(item)}</div>
                    )
                })}
            </div>
            <button onClick={(e) => gameStart()}>start</button>


        </div>

    )
}
