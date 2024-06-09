// src/components/Logout.js
/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css'; // Import the CSS file

function Logout() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem('isAuthenticated', 'false');
    navigate('/login');
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="logout">
      <button onClick={openModal}>Logout</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Are you sure you want to logout?</h2>
            <button onClick={handleLogout}>Yes</button>
            <button onClick={closeModal}>No</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Logout;*/