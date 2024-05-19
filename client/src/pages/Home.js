import React from 'react';
import { Header, Connect, Courses, Guide } from '../components/index.js';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-500">
      <Header />
      <Connect />
      <div className="mt-12">
        <Courses />
      </div>
      <div className="mt-12 mb-12">
        <Guide />
      </div>
    </div>
  );
};

export default Home;
