import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Starrating from './Starrating';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Starrating />
      </Router>
      <h2>Portfolio</h2>
    </>
  );
}

export default App;
