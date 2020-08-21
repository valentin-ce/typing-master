import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'

export default function Play() {

    const [maps, setMaps] = useState([]);

    useEffect(() => {
        var config = {
            method: 'get',
            url: 'http://localhost:4000/api/v1/maps',
            headers: {}
        };

        axios(config)
            .then(function (response) {
                setMaps(response.data)
                console.log(maps)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    console.log(maps)


    return (
        <div className="card-container">
            {maps.map((item, index) => (
                <Card 
                    key={index}
                    item={item}
                    title={item.title}
                    coveredletter={item.coveredletter}
                    gamemod={item.gamemod}
                    difficulty={item.difficulty}
                />
            ))}

        </div>
    )
}
