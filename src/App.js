import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Grade from './components/Grade';
import Navbar from './Navbar';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Grade' element={<Grade />} />
       
      </Routes>
    </>
  );
}

export default App;

