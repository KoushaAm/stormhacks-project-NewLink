import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';  // Make sure to import Link from react-router-dom

const Connect = () => {
  return (
    <div className="flex items-center justify-center">

      <Link to="/connect" className="hover:no-underline">
        <motion.div
          className="bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-96 h-72 transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ y: -20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          exit={{ y: -20, opacity: 0 }}
        >
          <h2 className="text-4xl text-center font-bold pt-12">Connect</h2>
          <p className="text-lg text-center">Hover over me!</p>
        </motion.div>
      </Link>

      <div>
        <p className="text-center text-lg ml-32 text-gray-800">
          This is a paragraph below the SFU heading.
          <br />
          You can add more text or content here as needed.
        </p>
      </div>
    </div>
  );
};

export default Connect;
