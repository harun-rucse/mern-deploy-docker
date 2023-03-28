import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateTask from './pages/CreateTask';
import Home from './pages/Home';

function App() {
  return (
    <div className="w-full h-screen bg-gray-800 text-gray-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateTask />} />
      </Routes>
    </div>
  );
}

export default App;
