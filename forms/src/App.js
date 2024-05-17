import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import FormA from './components/formA';
import FormB from './components/formB';
import FormC from './components/formC';
import FormD from './components/formD';
import Login from './components/login';
import Forms from './components/forms';
import Header from './components/header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUp from './components/signup';
import Landing from './components/landing';

function App() {
  return (
    <>
    <Router>
    <Header/>

      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/formA" element={<FormA />} />
        <Route path="/formB" element={<FormB />} />
        <Route path="/formC" element={<FormC />} />
        <Route path="/formD" element={<FormD />} />
        
      </Routes>
      <ToastContainer/>
    </Router>
    
    </>
  );
}

export default App;


