import React from 'react';
// import { Route, Routes, Switch } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Chat from './pages/Chat.js';

export default function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}
