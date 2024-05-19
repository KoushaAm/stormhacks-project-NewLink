import React from 'react';
import { Header, Connect, Guide, Logo } from '../components/index.js';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="h-screen" id = 'section1'>
        <Logo />
        <div class="scrollButton">
            <p class="scrollIcon"></p>
            <a href="#section2">Section 2 </a>
        </div>
      </div>
      <div id = 'section2'>
        <Connect />
        <div className="mt-12 mb-12">
        <Guide />
      </div>
      </div>
    </div>
  );
};

export default Home;
