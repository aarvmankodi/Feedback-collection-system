import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <div className="container">
      <h2>Welcome</h2>
      <Link to="/login">
        <button className="button">Login</button>
      </Link>
      <Link to="/signup">
        <button className="button">Sign Up</button>
      </Link>
    </div>
  );
};

export default Home;
