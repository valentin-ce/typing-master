import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import Context from '../context/context'

export default function Profile() {
    const token = localStorage.getItem('token')
    const [user, setUser] = useState('');




    useEffect(() => {
        var config = {
            method: 'get',
            url: 'http://localhost:4000/api/v1/user',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                setUser(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [token])

    const removeAccount = () => {
        console.log('removed')
    }

    console.log(user[0])



    return (
        <div>
            <p>{user && user[0] && user[0].username? user[0].username:""}</p>
            <p>{user && user[0] && user[0].email? user[0].email:""}</p>
            <button
                onClick={() => removeAccount()}>Supprimer mon compte</button>
        </div>
    )
}
