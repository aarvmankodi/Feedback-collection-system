import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Login from './components/login';
import Forms from './components/selector';
import FormA from './components/formA';
import FormB from './components/formB';
import FormC from './components/formC';
import FormD from './components/formD';
function App() {
  return (
    <>
    
    <Router>

      <Routes>
        <Route path="/" element={<Login className="container"/>} />
        <Route path='/forms' element={<Forms/>}/>
        <Route path="/formA" element={<FormA />} />
        <Route path="/formB" element={<FormB />} />
        <Route path="/formC" element={<FormC />} />
        <Route path="/formD" element={<FormD />} />

        
      </Routes>
    </Router>
    </>
  );
}

export default App;
