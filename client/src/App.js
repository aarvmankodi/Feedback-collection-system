// src/App.js
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Main from './components/main';
import Users from './components/users';
import Forms from './components/forms';
import Rating from './components/ratings';
import Feedback from './components/feedback';
import Application from './components/application';
import Survey from './components/survey';
import Login from './components/Login';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true');

    useEffect(() => {
        const authStatus = localStorage.getItem('isAuthenticated') === 'true';
        setIsAuthenticated(authStatus);
    }, []);

    return (
        <Router>
            {isAuthenticated && <Sidebar setIsAuthenticated={setIsAuthenticated} />}
            <Routes>
                <Route path="/" element={isAuthenticated ? <Main /> : <Navigate to="/login" />} />
                <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                <Route path="/users" element={isAuthenticated ? <Users /> : <Navigate to="/login" />} />
                <Route path="/forms" element={isAuthenticated ? <Forms /> : <Navigate to="/login" />} />
                <Route path="/forms/rating" element={isAuthenticated ? <Rating /> : <Navigate to="/login" />} />
                <Route path="/forms/application" element={isAuthenticated ? <Application /> : <Navigate to="/login" />} />
                <Route path="/forms/feedback" element={isAuthenticated ? <Feedback /> : <Navigate to="/login" />} />
                <Route path="/forms/survey" element={isAuthenticated ? <Survey /> : <Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}

export default App;
