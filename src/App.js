import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Starrating from './Starrating';
import Gamedev from './Gamedev';
import Dotnet from './Dotnet';
import Frontend from './Frontend';
import Misc from './Misc';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
      <Route path='/Home' element={<Home/>} />
      <Route path='/Gamedev' element={<Gamedev/>} />
      <Route path='/Dotnet' element={<Dotnet/>} />
      <Route path='/Frontend' element={<Frontend/>} />
      <Route path='/Misc' element={<Misc/>} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
