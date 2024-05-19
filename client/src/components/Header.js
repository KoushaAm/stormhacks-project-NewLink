import React from 'react';
import { motion } from 'framer-motion';
import Connect from './Connect.js';

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-center bg-slate-200">
        <h1 className="p-4">Navigation SFUConnect</h1>
        <h1 className="p-4">Connect</h1>
      </div>
      <div>
        <div className="flex items-center justify-center bg-yellow-50">
          {/* Logo */}
          <div>
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2 }}
              className="text-9xl font-bold text-red-600 relative"
              style={{ textShadow: '0 0 2px white' }}
            >
              SFU
            </motion.h1>
          </div>
        </div>

        <div className="flex items-center justify-center bg-gray-100">
          {/* Logo Paragraph */}
          <div className="text-center text-lg p-4 text-gray-800 ">
            <p>
              This is a paragraph below the SFU heading.
              <br />
              You can add more text or content here as needed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
