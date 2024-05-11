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

function App() {
  return (
    <>
    <Router>
    <Sidebar className='sidebar'/>

    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/users" element={<Users/>} />
      <Route path='/forms' element={<Forms/>} />
      <Route path='/forms/rating' element={<Rating/>} />
      <Route path='/forms/application' element={<Application/>} />
      <Route path='/forms/feedback' element={<Feedback/>} />
      <Route path='/forms/survey' element={<Survey/>} />



    </Routes>
    </Router>
    
    </>
    
  );
}

export default App;
