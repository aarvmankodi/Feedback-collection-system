import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './application.css';

export default function Application() {
    let users = [
        { id: 1, name: 'John Doe', email: 'john@example.com', dob: '21/4/2004', address: 'home at jbp city mp', location: 'bangaluru', github: 'https://www.github.com/aarvmankodi' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', dob: '21/4/2004', address: 'home at jbp city mp', location: 'bangaluru', github: 'https://www.github.com/aarvmankodi' },
        { id: 3, name: 'Alice Johnson', email: 'alice@example.com', dob: '21/4/2004', address: 'home at jbp city mp', location: 'bangaluru', github: 'https://www.github.com/aarvmankodi' }
    ];

    // const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:3001/user-forms/formB');
    //             setUsers(response.data);
    //         } catch (error) {
    //             console.error('Error fetching user data:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    return (
        <div className='forms'>
            <div className='title'>Application Form</div>
            <div className='user-entries'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>DOB</th>
                            <th>Address</th>
                            <th>Work Location</th>
                            <th>Github</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr className='entry' key={index}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.dob}</td>
                                <td>{user.address}</td>
                                <td>{user.location}</td>
                                <td><a href={user.github}>Profile</a></td>
                                <td><FontAwesomeIcon icon={faTrash} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
