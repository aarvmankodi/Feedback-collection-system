import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {
  const navigate = useNavigate();
  const navToLogin = () => {
    navigate("/login")
  }
  return (
    <div className="container">
      <h2>Welcome</h2>
      
        <button onClick={navToLogin} className="button">Login</button>
      
        <button onClick={navToLogin} className="button">Sign Up</button>
      
    </div>
  );
};

export default Home;
