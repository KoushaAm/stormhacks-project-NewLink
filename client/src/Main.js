import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Chat from './pages/Chat.js';
import Connect from './pages/Connect.js';
import Organisation from './pages/Organisations.js';
import Dashboard from './pages/Dashboard.js';

export default function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/connect" element={<Connect />} />
      <Route path="/organisations" element={<Organisation />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
