// src/components/Logout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem('isAuthenticated', 'false');
    navigate('/login');
  };

  return (
    <div className="logout">
      <h2>Are you sure you want to logout?</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
