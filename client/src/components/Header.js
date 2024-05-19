import React from 'react';
import { Link } from 'react-router-dom';
import useUser from '../hooks/useUser.js';

const Header = () => {
  const user = useUser();

  const NavItem = ({ to, children }) => (
    <Link to={to} className="hover:text-blue-500 text-xs md:text-base">{children}</Link>
  );

  // making a small comment to test my git
  return (
    user && (
      <div className="sticky backdrop-blur-md bg-opacity-60 bg-white top-0 z-50">
        <div className="flex justify-between items-center bg-slate-200 p-3 shadow-md">
          <Link to="/" className="flex items-center space-x-4 ml-4 md:ml-24">
            <img src="/logo.png" alt="SFUConnect Logo" className="h-6 w-6" />
            <h1 className="text-xl font-semibold hidden md:block">SFUConnect</h1>
          </Link>
          <nav className="flex items-center justify-center space-x-2 md:space-x-4 mr-4 md:mr-24">
            <NavItem to="/chat">Chat</NavItem>
            <NavItem to="/connect">Connect</NavItem>
            <NavItem to="/organisations">Organisations</NavItem>
            <p className='text-2xl text-gray-400 hidden md:block'>|</p>
            <Link to="/dashboard">
              <img src={user.profilePicture} alt="Profile" className="h-6 w-6 rounded-full" />
            </Link>
          </nav>
        </div>
      </div>
    )
  );
};

export default Header;