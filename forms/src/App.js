import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Login from './components/login';
import Forms from './components/selector';
import FormA from './components/formA';
import FormB from './components/formB';
function App() {
  return (
    <>
    
    <Router>

      <Routes>
        <Route path="/" element={<Login className="container"/>} />
        <Route path='/forms' element={<Forms/>}/>
        <Route path="/formA" element={<FormA />} />
        <Route path="/formB" element={<FormB />} />
        
      </Routes>
    </Router>
    </>
  );
}

export default App;
