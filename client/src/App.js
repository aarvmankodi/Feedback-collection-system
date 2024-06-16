import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/main';
import Users from './components/users';
import Forms from './components/forms';
import Rating from './components/ratings';
import Feedback from './components/feedback';
import Application from './components/application';
import Survey from './components/survey';
import Login from './components/Login';
import Home from './components/home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    

    return (
        <Router>
                
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login  />} />
                        <Route path="/main" element={<Main />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="/forms" element={<Forms />} />
                        <Route path="/forms/rating" element={<Rating />} />
                        <Route path="/forms/application" element={<Application />} />
                        <Route path="/forms/feedback" element={<Feedback />} />
                        <Route path="/forms/survey" element={<Survey />} />
                    </Routes>
                
                <ToastContainer/>
            
        </Router>
    );
}

export default App;
