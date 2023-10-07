// src/App.js
import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
