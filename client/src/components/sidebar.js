import React from 'react';
import './sidebar.css';
import { useNavigate } from 'react-router-dom';


function Sidebar() {
    const navigate = useNavigate();

    const UserRedirect = () => {
        navigate('/users');
    }

    const FormRedirect = () => {
        navigate('/forms');
    }
    const   HomeRedirect = () => {
        navigate('/');
    }
    return (
        <div id='sidebar'>
            <h1>Client Side</h1>
            <div className='components'  onClick={HomeRedirect}>dashboard</div>
            <div className='components' onClick={UserRedirect}>users</div>
            <div className='components' onClick={FormRedirect}>forms</div>
            
            <div className='components'>settings</div>
        </div>
    )
}


export default Sidebar;
