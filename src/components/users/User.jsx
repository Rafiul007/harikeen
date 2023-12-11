import React, { useState } from 'react'
import './User.css'
import axios from 'axios';

function User() {
    const [fetchData, setfetchData] = useState([])

    const fetchUsers = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setfetchData(response.data)
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    return (
        <div className="user container">
            <div className='user'>
                {
                    fetchData.map((item) => {
                        const { id, name, username, email, phone } = item;
                        return (
                            <div className="user-card">
                                <h1>{username}</h1>
                                <p>{name}</p>
                                <p>{phone}</p>
                                <p>{email}</p>
                            </div>
                        )
                    })
                }

            </div>
            <div className="api-btn">
                <button onClick={() => fetchUsers()}>Click me!</button>
            </div>
        </div>

        // https://jsonplaceholder.typicode.com/users
    )
}

export default User