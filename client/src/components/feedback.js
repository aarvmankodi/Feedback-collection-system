import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './feedback.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Feedback() {
    const [users, setUsers] = useState([]);
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/user-forms/formC');
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
            const res = await axios.post("http://localhost:3001/delete" , {user , form :'form C'});
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
        <div className='forms'>
            <div className='title'>Feedback Form</div>
            <div className='user-entries'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th className='entry-name'>Name</th>
                            <th className='entry-email'>Email</th>
                            <th className='entry-rating'>Rating</th>
                            <th className='entry-feedback'>Feedback</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr className='entry' key={index}>
                                <td className='entry-name'>{user.name}</td>
                                <td className='entry-email'>{user.email}</td>
                                <td className='entry-rating'>{user.rating}</td>
                                <td className='entry-feedback'>{user.feedback}</td>
                                <td><FontAwesomeIcon icon={faTrash} className="icon"  onClick={() => deleteEntry(user)}/></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
