import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Chat from './pages/Chat.js';
import Connect from './pages/Connect.js';
import Dashboard from './pages/Dashboard.js';
import Courses from './pages/Courses.js';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import NewEvent from './pages/NewEvent.js';
import EventPage from './pages/EventPage.js';

export default function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/connect" element={<Connect />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/newevent" element={<NewEvent />} />
      <Route path="/event/:id" element={<EventPage />} />
    </Routes>
  );
}
