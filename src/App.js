import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import Results from './components/Results';
// import { Schema } from './resource.ts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="results" element={<Results />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
