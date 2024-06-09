import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Survey() {
    // let users = [
    //     { id: 1, name: 'John Doe', email: 'john@example.com', rating1: 7, rating2: 7, rating3: 7, recommend: 'yes', feedback: 'this is feedback' },
    //     { id: 2, name: 'Jane Smith', email: 'jane@example.com', rating1: 7, rating2: 7, rating3: 7, recommend: 'yes', feedback: 'this is feedback' },
    //     { id: 3, name: 'Alice Johnson', email: 'alice@example.com', rating1: 7, rating2: 7, rating3: 7, recommend: 'yes', feedback: 'this is feedback' }
    // ];
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/user-forms/formD');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className='forms'>
            <div className='title'>Survey Form</div>
            <div className='user-entries'>
                <table className=' table'>
                    <thead>
                        <tr>
                            <th className='entry-name'>Name</th>
                            <th className='entry-email'>Email</th>
                            <th className='entry-rating'>Rating 1</th>
                            <th className='entry-rating'>Rating 2</th>
                            <th className='entry-rating'>Rating 3</th>
                            <th className='entry-recommend'>Recommend</th>
                            <th className='entry-feedback'>Feedback</th>
                            
                        </tr>
                    </thead>
                    </table>
                    <table>
                    <tbody>
                        {users.map((user, index) => (
                            <tr className='entry' key={index}>
                                <td className='entry-name'>{user.name}</td>
                                <td className='entry-email'>{user.email}</td>
                                <td className='entry-rating'>{user.rating1}</td>
                                <td className='entry-rating'>{user.rating2}</td>
                                <td className='entry-rating'>{user.rating3}</td>
                                <td className='entry-recommend'>{user.recommend}</td>
                                <td className='entry-feedback'>{user.feedback}</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}


