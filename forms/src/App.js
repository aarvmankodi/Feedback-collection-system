import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Login from './components/login';

function App() {
  return (
    <>
    
    <Router>

      <Routes>
        <Route path="/" element={<Login className="container"/>} />

        
      </Routes>
    </Router>
    </>
  );
}

export default App;
