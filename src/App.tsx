import React from 'react';
import './App.css';
import Dashboard from './secure/Dashboard';
import User from './secure/User';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './public/login';
import Register from './public/Register';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/users' element={<User />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
