// src/components/Sidebar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './sidebar.css';

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div id='sidebar'>
      <div className='components' onClick={() => navigate('/')}>Dashboard</div>
      <div className='components' onClick={() => navigate('/users')}>Users</div>
      <div className='components' onClick={() => navigate('/forms')}>Forms</div>
      <div className='components' onClick={() => navigate('/responses')}>Number of Responses</div>
      <div className='components' onClick={() => navigate('/logout')}>Logout</div>
    </div>
  );
}

export default Sidebar;
