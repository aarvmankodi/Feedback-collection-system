import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './users.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './sidebar';

export default function Users() {
    const [users, setUsers] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/user-forms/all-users');
            console.log("ggg" , response.data)
            const updatedUsers = response.data.map(user => ({ ...user, verified: "" }));
            setUsers(updatedUsers);
            console.log("fff" , users);
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
            const res = await axios.post("http://localhost:3001/delete" , {user , form :'Accounts'});
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
        <Sidebar/>
        <div className='users'>
            <div className='title'>Users</div>
            <div className='user-entries'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr className='entry' key={index}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
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
