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
import Signup from './components/signup';
import Home from './components/home';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true');

    useEffect(() => {
        const authStatus = localStorage.getItem('isAuthenticated') === 'true';
        setIsAuthenticated(authStatus);
    }, []);

    return (
        <Router>
            {isAuthenticated ? (
                <>
                    <Sidebar setIsAuthenticated={setIsAuthenticated} />
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="/forms" element={<Forms />} />
                        <Route path="/forms/rating" element={<Rating />} />
                        <Route path="/forms/application" element={<Application />} />
                        <Route path="/forms/feedback" element={<Feedback />} />
                        <Route path="/forms/survey" element={<Survey />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </>
            ) : (
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            )}
        </Router>
    );
}

export default App;
