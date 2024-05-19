import React from 'react';
import { Header, Connect, Guide, Logo } from '../components/index.js';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-600 to-white">
      <Header />
      <Logo />
      <Connect />
      <div className="mt-12 mb-12">
        <Guide />
      </div>
    </div>
  );
};

export default Home;
