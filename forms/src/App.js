import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Login from './components/login';
import Forms from './components/selector';
function App() {
  return (
    <>
    
    <Router>

      <Routes>
        <Route path="/" element={<Login className="container"/>} />
        <Route path='/forms' element={<Forms/>}/>

        
      </Routes>
    </Router>
    </>
  );
}

export default App;
