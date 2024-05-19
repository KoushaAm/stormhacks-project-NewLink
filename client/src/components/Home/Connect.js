import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Connect = () => {
  return (
    <div className="flex items-center justify-center mb-24 mt-20">
      <Link to="/connect" className="hover:no-underline">
        <motion.div
          className="bg-red-700 shadow-2xl text-white rounded-lg hover:bg-blue-600 w-64 h-64 transition duration-300 mr-5"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
        >
          <h2 className="text-4xl text-center font-bold pt-12">Connect</h2>
          <p className="text-lg text-center">our events page</p>
        </motion.div>
      </Link>

      <div className="max-w-sm p-4 bg-slate-300 rounded-lg">
        <p className="text-center text-lg text-gray-800">
          Find volunteer students who can show you around campus. Maybe they will be your best friends one day.
        </p>
      </div>
    </div>
  );
};

export default Connect;
