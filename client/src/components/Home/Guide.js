import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Guide = () => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <p className="text-center text-lg mr-32 text-gray-800">
          This is a paragraph below the SFU heading.
          <br />
          You can add more text or content here as needed.
        </p>
      </div>

      {/* Course Card */}
      <Link to="/chat" className="hover:no-underline">
        <motion.div
          className="bg-blue-500 text-white mt-12 rounded-lg hover:bg-blue-600 w-96 h-72 transition duration-300"
          whileHover={{ scale: 1.1 }} // Scale up on hover
          whileTap={{ scale: 0.9 }} // Scale down on tap
          initial={{ y: -20, opacity: 0 }} // Initial position and opacity
          animate={{ y: 0, opacity: 1 }} // Animation to default position and opacity
          exit={{ y: -20, opacity: 0 }} // Exit animation
        >
          <h2 className="text-4xl text-center font-bold mb-12 mt-12">Guide</h2>
          <p className="text-lg text-center">Take me to the SFU guide</p>
        </motion.div>
      </Link>
    </div>
  );
};

export default Guide;
