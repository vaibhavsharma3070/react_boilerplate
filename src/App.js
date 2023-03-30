import './App.css';
import React from 'react';
import Main from './components/Main';
import { Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
