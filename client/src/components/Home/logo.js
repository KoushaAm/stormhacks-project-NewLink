import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <div>
      <div className="flex items-center justify-center mt-4">
      
        <div className="w-screen h-screen inline-flex items-center justify-center rounded-md p-12">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            className="text-8xl font-bold text-grey"
            style={{ textShadow: '0 0 2px black' }}
          >
            SFU
          </motion.h1>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="text-center text-lg p-4 text-gray-800">
          
        </div>
      </div>
    </div>
  );
};

export default Logo;
