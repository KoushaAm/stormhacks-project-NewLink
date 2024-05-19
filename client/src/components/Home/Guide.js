import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Guide = () => {
  return (
    <div className="flex items-center justify-center mb-24 mt-20">
      <motion.div 
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div className='bg-slate-300 p-32 rounded-lg'>
          <p className="text-center text-lg text-gray-800">
            This is a paragraph below the SFU heading.
            <br />
            You can add more text or content here as needed.
          </p>
        </div>
      </motion.div>

      {/* Course Card */}
      <Link to="/chat" className="hover:no-underline">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="bg-red-700 shadow-2xl mt-20 mr-5 text-white rounded-lg hover:bg-red-00 p-24 transition duration-300"
        >
          <h2 className="text-4xl text-center font-bold pt-12">Guide</h2>
          <p className="text-lg text-center">Take me to the SFU guide</p>
        </motion.div>
      </Link>
    </div>
  );
};

export default Guide;