import React from 'react';
import { Header, Connect, Guide, Logo } from '../components/index.js';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="h-screen flex items-center justify-center flex-col" id = 'section1'>
        <Logo />
        <div className="relative mt-12">
            <a href="#section2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="scrollIcon h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
        </div>
      </div>
      <div id='section2' className='pb-32'>
        <Connect />
        <Guide />
      </div>
    </div>
  );
};

export default Home;