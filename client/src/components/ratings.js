import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons';
export default function Rating() {
    // let users = [
    //     { id: 1, name: 'John Doe', email: 'john@example.com', rating: 7},
    //     { id: 2, name: 'Jane Smith', email: 'jane@example.com', rating: 7 },
    //     { id: 3, name: 'Alice Johnson', email: 'alice@example.com', rating: 7 }
    //   ];
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/user-forms/formA');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, []);
  return (
    <div className='forms'>
        <div className='title'>Rating Form</div>
        <div className='user-entries'>
        

<table className=' table'>
                    <thead>
                        <tr>
                            <th className='entry-name'>Name</th>
                            <th className='entry-email'>Email</th>
                            <th className='entry-rating'>Rating</th>
                           
                            <th>Remove</th>
                        </tr>
                    </thead>
                    </table>
                    <table>
                    <tbody>
                        {users.map((user, index) => (
                            <tr className='entry' key={index}>
                                <td className='entry-name'>{user.name}</td>
                                <td className='entry-email'>{user.email}</td>
                                <td className='entry-rating'>{user.rating}</td>
                                
                                <td><FontAwesomeIcon icon={faTrash} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    </div>
  )
}

