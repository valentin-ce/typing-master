import React from 'react'
import '../style/Key.scss'

function Game({ coveredletter }) {

    function parse_query_string(query) {
        var vars = query.split("&");
        var query_string = {};
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            var key = decodeURIComponent(pair[0]);
            var value = decodeURIComponent(pair[1]);
            // If first entry with this name
            if (typeof query_string[key] === "undefined") {
                query_string[key] = decodeURIComponent(value);
                // If second entry with this name
            } else if (typeof query_string[key] === "string") {
                var arr = [query_string[key], decodeURIComponent(value)];
                query_string[key] = arr;
                // If third or later entry with this name
            } else {
                query_string[key].push(decodeURIComponent(value));
            }
        }
        return query_string;
    }

    const query = window.location.search.substring(1);
    const qs = parse_query_string(query);

    console.log(qs)

    function makemap(length) {
        var result = [];
        const characters = qs.coveredletter;
        const charactersLength = characters.length;
        // generate string with letter and number params
        for ( let i = 0; i < length; i++) {
            /*
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            */
            result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
        }
        return result;
    }

    const map = makemap(40)
    console.log(map[0])

    return (
        <div className="gameScreen">
            <div className="map">
            {map.map((letter, index) => (
               <div className="element"><div className={`key ${letter}`}>{letter}</div></div>
            ))}
            </div>
        </div>
    )
}

export default Game;