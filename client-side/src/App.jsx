import React from 'react';
import { toast } from 'react-toastify';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

//componets
import Home from './components/Home';
import Sign from './components/Sign';
import Login from './components/Login';

const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/sign' element={<Sign/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App