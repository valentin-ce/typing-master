import React, { useContext, useState } from 'react'
import axios from 'axios'
import Context from '../context/context'

export default function Profile() {
    const token = localStorage.getItem('token')
    const [ user, setUser ] = useState('');

    var config = {
        method: 'get',
        url: 'http://localhost:4000/users',
        headers: {
            'authentication': token 
        }
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });


    return (
        <div>
            Profile
        </div>
    )
}
