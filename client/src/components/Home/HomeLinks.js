import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Connect = () => {
  return (
    <div className="flex items-center justify-center space-x-4 mx-32">
      <Link to="/connect" className="flex-1 hover:no-underline">
        <motion.div
          className="bg-red-700 shadow-2xl text-white rounded-lg hover:bg-blue-600 w-full h-72 transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
        >
          <h2 className="text-4xl text-center font-bold pt-12">Connect</h2>
          <p className="text-lg text-center mt-4">
            Join the conversation and make meaningful connections.
          </p>
        </motion.div>
      </Link>

      <div className="flex-1 bg-white shadow-lg rounded-lg p-8">
        <p className="text-center text-lg text-gray-800 font-semibold">
          Our app bridges the gap between individuals, fostering a community of learners, thinkers,
          and doers. Connect with like-minded individuals, share ideas, collaborate on projects, and
          grow together. The world is at your fingertips, and it's time to connect.
        </p>
      </div>
    </div>
  );
};

const Guide = () => {
  return (
    <div className="flex items-center justify-center mb-24 mt-20 space-x-4 mx-32">
      <div className="flex-1 bg-white shadow-lg rounded-lg p-8">
        <p className="text-center text-lg text-gray-800 font-semibold">
          Ask question to our advanced chatbot powered by the llama3 model finetuned to the SFU
          resources. Ask general question you have about SFU and visit FAQ.
        </p>
      </div>

      <Link to="/chat" className="flex-1 hover:no-underline">
        <motion.div
          className="bg-red-700 shadow-2xl text-white rounded-lg hover:bg-red-600 w-full h-72 transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
        >
          <h2 className="text-4xl text-center font-bold pt-12">Guide</h2>
          <p className="text-lg text-center mt-4">Take me to the SFU guide</p>
        </motion.div>
      </Link>
    </div>
  );
};

const HomeLinks = () => {
  return (
    <div className="pb-24">
      <Connect />
      <Guide />
    </div>
  );
};

export default HomeLinks;
