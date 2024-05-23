// src/components/Sidebar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './sidebar.css';

function Sidebar() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem('isAuthenticated', 'false');
    navigate('/login');
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div id='sidebar'>
      <div className='components' onClick={() => navigate('/')}>Dashboard</div>
      <div className='components' onClick={() => navigate('/users')}>Users</div>
      <div className='components' onClick={() => navigate('/forms')}>Forms</div>
     
      <div className='components' onClick={openModal}>Logout</div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Are you sure you want to logout?</h2>
            <button className="confirm" onClick={handleLogout}>Yes</button>
            <button className="cancel" onClick={closeModal}>No</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
