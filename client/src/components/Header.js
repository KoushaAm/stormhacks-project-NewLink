import React from 'react';
import { Link } from 'react-router-dom';
import useUser from '../hooks/useUser.js';
import { motion } from 'framer-motion';

const Header = () => {
  const user = useUser();

  const NavItem = ({ to, children }) => (
    <Link to={to} className="hover:text-blue-500 text-sm md:text-lg"> {/* Adjusted font sizes */}
      {children}
    </Link>
  );

  return (
    user && (
      <div className="sticky backdrop-blur-md bg-transparent top-0 z-50">
        <div className="flex justify-between items-center p-3 ">
          <Link to="/" className="flex items-center space-x-4 ml-4 md:ml-24">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6509/6509383.png"
              alt="SFUConnect Logo"
              className="h-6 w-6"
            />
            <h1 className="text-xl font-semibold hidden md:block">NewLink</h1>
          </Link>
          <nav className="flex items-center justify-center space-x-2 md:space-x-4 mr-4 md:mr-24">
            <NavItem to="/chat">
              <strong>Chat</strong>
            </NavItem>
            <NavItem to="/connect">
              <strong>Connect</strong>
            </NavItem>
            <NavItem to="/courses">
              <strong>Courses</strong>
            </NavItem>
            <p className="text-2xl text-gray-400 hidden md:block">|</p>
            <Link to="/dashboard">
             
              <img
                src={user.profilePicture ? user.profilePicture : 'https://cdn-icons-png.flaticon.com/512/42/42877.png'}
                alt="Profile"
                className="h-6 w-6 rounded-full"
              />
            </Link>
          </nav>
        </div>
      </div>
    )
  );
};

export default Header;
