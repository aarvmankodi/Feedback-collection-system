import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    return (
        <Router>
            {isAuthenticated && <Sidebar className='sidebar' />}
            <Routes>
                <Route path="/" element={isAuthenticated ? <Main /> : <Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/users" element={isAuthenticated ? <Users /> : <Login />} />
                <Route path="/forms" element={isAuthenticated ? <Forms /> : <Login />} />
                <Route path="/forms/rating" element={isAuthenticated ? <Rating /> : <Login />} />
                <Route path="/forms/application" element={isAuthenticated ? <Application /> : <Login />} />
                <Route path="/forms/feedback" element={isAuthenticated ? <Feedback /> : <Login />} />
                <Route path="/forms/survey" element={isAuthenticated ? <Survey /> : <Login />} />
            </Routes>
        </Router>
    );
}

export default App;
