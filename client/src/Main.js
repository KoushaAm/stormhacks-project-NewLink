import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Chat from './pages/Chat.js';
import Connect from './pages/Connect.js';
import Dashboard from './pages/Dashboard.js';
import Courses from './pages/Courses.js';

export default function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/connect" element={<Connect />} />
      <Route path="/courses" element={<Courses/>} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
