import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Chatbot = () => {
  const [loading, setLoading] = useState(false);

  const messageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const userMessageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="bg-gray-200 flex-1 overflow-y-scroll">
        <div className="px-4 py-2">
          <div className="flex items-center mb-2">
            <img
              className="w-8 h-8 rounded-full mr-2"
              src="https://picsum.photos/50/50"
              alt="User Avatar"
            />
            <div className="font-medium">John Doe</div>
          </div>
          <motion.div
            className="bg-white rounded-lg p-2 shadow mb-2 max-w-sm"
            initial="hidden"
            animate="visible"
            variants={messageVariants}
            transition={{ duration: 0.5 }}
          >
            Hi, how can I help you?
          </motion.div>
          <div className="flex items-center justify-end">
            <motion.div
              className="bg-blue-500 text-white rounded-lg p-2 shadow mr-2 max-w-sm"
              initial="hidden"
              animate="visible"
              variants={userMessageVariants}
              transition={{ duration: 0.5 }}
            >
              Sure, I can help with that.
              <span className="loading loading-dots loading-lg"></span>
            </motion.div>
            <img
              className="w-8 h-8 rounded-full"
              src="https://picsum.photos/50/50"
              alt="User Avatar"
            />
          </div>
          {/* {loading && (
                        <motion.div
                            className="flex justify-center items-center my-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <span className="loading loading-dots loading-lg"></span>
                        </motion.div>
                    )} */}
        </div>
      </div>
      <div className="bg-gray-100 px-4 py-2">
        <div className="flex items-center">
          <input
            className="w-full border rounded-full py-2 px-4 mr-2"
            type="text"
            placeholder="Type your message..."
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
