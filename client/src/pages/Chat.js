import React from 'react';
import { Header, Chatbot } from '../components/index.js';

const Chat = () => {
  return (
    <>
    <Header/>
    <div className="bg-slate-500">
      <Chatbot />
    </div>
    </>
  );
};

export default Chat;
