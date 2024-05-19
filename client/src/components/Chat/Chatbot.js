import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([{ text: 'Hi, how can I help you?', user: false }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [messagesLoading, setMessagesLoading] = useState(false);

  const messageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const userMessageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  useEffect(() => {
    const loadModel = async () => {
      try {
        const response = await axios.get('http://localhost:8080/chatbot/load');
        if (
          response.data.message === 'Model initialized' ||
          response.data.message === 'Model already initialized'
        ) {
          setLoading(false);
        } else {
          setError('Error loading model');
        }
      } catch (err) {
        setError('Error loading model');
      }
    };
    loadModel();
  }, []);

  const handleSend = async () => {
    if (input.trim() === '') return;

    const newMessages = [...messages, { text: input, user: true }];
    setMessages(newMessages);
    setInput('');
    setMessagesLoading(true);

    try {
      const response = await axios.post('http://localhost:8080/chatbot/prompt', { question: input });
      const answer = response.data.answer;

      setMessages([...newMessages, { text: answer, user: false }]);
      setMessagesLoading(false);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      setMessagesLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-200">
        <div>Loading model...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-200">
        <div>{error}</div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col">
      <div className="bg-gray-200 flex-1 overflow-y-scroll">
        <div className="px-4 py-2">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              className={`flex items-center ${msg.user ? 'justify-end' : ''} mb-2`}
              initial="hidden"
              animate="visible"
              variants={msg.user ? userMessageVariants : messageVariants}
              transition={{ duration: 0.5 }}
            >
              {!msg.user && (
                <img
                  className="w-8 h-8 rounded-full mr-2"
                  src="https://img.freepik.com/premium-vector/artificial-intelligence-brain-icon-digital-electronic-data-transfer-concept-vector-illustration_41981-2223.jpg"
                  alt="User Avatar"
                />
              )}
              <div
                className={`rounded-lg p-3 shadow max-w-sm ${msg.user ? 'bg-red-700 text-white' : 'bg-white'}`}
                style={{ borderRadius: '20px' }}
              >
                {msg.text}
              </div>
              {msg.user && (
                <img
                  className="w-8 h-8 rounded-full ml-2"
                  style={{ borderRadius: '20px' }}
                  src="https://picsum.photos/50/50"
                  alt="User Avatar"
                />
              )}
            </motion.div>
          ))}
          {messagesLoading && (
            <motion.div
              className="flex items-center mb-2"
              initial="hidden"
              animate="visible"
              variants={messageVariants}
              transition={{ duration: 0.5 }}
            >
              <div
                className="rounded-lg p-2 shadow max-w-sm bg-white flex items-center"
                style={{ borderRadius: '20px' }}
              >
                <div className="loader mr-2"></div>
                <div className="rounded-lg p-2 shadow max-w-sm bg-white flex items-center">
                  <div className="loader mr-2"></div>
                  <div class="flex space-x-2 px-2 py-2 justify-center items-center bg-white white:invert">
                    <span class="sr-only">Loading...</span>
                    <div class="h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div class="h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div class="h-2 w-2 mr-2 bg-black rounded-full animate-bounce"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
      <div className="bg-gray-100 px-4 py-2">
        <div className="flex items-center mb-16">
          <input
            className="w-full border rounded-full py-2 px-4 mr-2"
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-red-700 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-full"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
