import React, { useState } from 'react';
import './sidebar.css';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate();
    const [usersActive, setUsersActive] = useState(false);

    const UserRedirect = () => {
        navigate('/users');
        setUsersActive(true); // Activate the users button
    }

    const FormRedirect = () => {
        navigate('/forms');
    }

    const HomeRedirect = () => {
        navigate('/');
    }

    return (
        <div>
            <div id='sidebar'>
                <div className={`components ${usersActive ? 'active' : ''}`} onClick={HomeRedirect}>Dashboard</div>
                <div className={`components ${usersActive ? 'active' : ''}`} onClick={UserRedirect}>Users</div>
                <div className={`components ${usersActive ? 'active' : ''}`} onClick={FormRedirect}>Forms</div>
                <div className={`components ${usersActive ? 'active' : ''}`}>Settings</div>
                <div className={`components ${usersActive ? 'active' : ''}`}>Number of Responses</div>
            </div>
        </div>
    );
}

export default Sidebar;
