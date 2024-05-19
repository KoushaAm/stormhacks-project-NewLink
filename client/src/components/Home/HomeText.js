import React from 'react';
import { motion } from 'framer-motion';

const HomeText = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/6509/6509383.png"
          alt="SFUConnect Logo"
          className="h-64 w-64 mb-20"
        />
      </div>
      <div className="flex items-center justify-center mt-[-64px] mb-2">
        <div className="inline-flex items-center justify-center rounded-md">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            className="text-7xl font-bold"
            style={{ textShadow: '0 0 2px black' }}
          >
            Welcome to NewLink
          </motion.h1>
        </div>
      </div>

      <div className="flex items-center justify-center mb-32">
        <div className="inline-flex items-center justify-center rounded-md">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            className="text-3xl text-grey"
            style={{ textShadow: '0 0 2px black' }}
          >
            Connect with peers and learn about SFU
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default HomeText;
