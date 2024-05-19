import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Guide = () => {
  return (
    <div className="flex items-center justify-center bg-amber-700">
      {/* Connect Card */}
      <Link
        to="/chat"
        className=" bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-64 h-96 transition duration-300 "
      >
        <h2 className="text-4xl text-center font-bold mb-12 mt-12">Guide</h2>
        <p className="text-lg text-center">Hover over me!</p>
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

export default Guide;
