import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './users.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Users() {
    const [verifiedUsers, setVerifiedUsers] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/user-forms/all-users');
                const updatedUsers = response.data.map(user => ({ ...user, verified: "unverified" }));
                setUsers(updatedUsers);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
    
        const fetchVerifiedUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3001/user-forms/all-user-accounts');
                setVerifiedUsers(response.data);
            } catch (error) {
                console.error('Error fetching verified users:', error);
            }
        };
       
       
    
        fetchData();
        fetchVerifiedUsers();
        
        
        
    }, [verifiedUsers, users]);
    
    useEffect(() => {
        const updateVerifiedStatus = (verifiedUsers) => {
            const updatedUsers = users.map(user => {
                const isVerified = verifiedUsers.some(verifiedUser =>
                    verifiedUser.name === user.name && verifiedUser.email === user.email
                );
                return { ...user, verified: isVerified ? "verified" : "unverified" };
            });
            console.log(updatedUsers);
            setUsers(updatedUsers);
        };
    
        if (verifiedUsers.length > 0) {
            updateVerifiedStatus(verifiedUsers);
        }
    }, [verifiedUsers, users]);
    
    
    return (
        <div className='users'>
            <div className='title'>Users</div>
            <div className='user-entries'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verified</th>
                            <th>Remove</th>
                        </tr>
                    </thead></table><table>
                    <tbody>
                        {users.map((user, index) => (
                            <tr className='entry' key={index}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.verified}</td>
                                <td><FontAwesomeIcon icon={faTrash} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
