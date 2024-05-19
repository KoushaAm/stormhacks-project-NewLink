import React from 'react';
import { motion } from 'framer-motion';

const HomeText = () => {
  return (
    <div>
      <div className="flex items-center justify-center mt-4 mb-12">
        <div className="inline-flex items-center justify-center rounded-md p-12">
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
    </div>
  );
};

export default HomeText;
