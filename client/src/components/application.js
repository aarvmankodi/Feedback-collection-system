import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './application.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './sidebar';

export default function Application() {
    const [users, setUsers] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/user-forms/formB');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };
    useEffect(() => {
        

        fetchData();
    }, []);

    const deleteEntry = async (user) =>{
        try{
            console.log(user , "aaa")
            const res = await axios.post("http://localhost:3001/delete" ,  {user , form :'form B'});
            console.log(res.data)
            if (res.status === 200)
                {
                    
                    fetchData();
                }
        }catch(e){
            console.log(e);
        }
    }
    return (
        <>
        
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
                                <td><FontAwesomeIcon icon={faTrash} className="icon"  onClick={() => deleteEntry(user)}/></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
}
