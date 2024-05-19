import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Chatbot = () => {
    const [messages, setMessages] = useState([{ text: 'Hi, how can I help you?', user: false }]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
                const response = await axios.get('http://localhost:8080/load');
                if (response.data.message === 'Model initialized' || response.data.message === 'Model already initialized') {
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

        try {
            const response = await axios.post('http://localhost:8080/prompt', { question: input });
            const answer = response.data.answer;

            setMessages([...newMessages, { text: answer, user: false }]);
        } catch (error) {
            console.error('Error fetching AI response:', error);
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
                                <img className="w-8 h-8 rounded-full mr-2" src="https://picsum.photos/50/50" alt="User Avatar" />
                            )}
                            <div className={`rounded-lg p-2 shadow max-w-sm ${msg.user ? 'bg-blue-500 text-white' : 'bg-white'}`}>
                                {msg.text}
                            </div>
                            {msg.user && (
                                <img className="w-8 h-8 rounded-full ml-2" src="https://picsum.photos/50/50" alt="User Avatar" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="bg-gray-100 px-4 py-2">
                <div className="flex items-center">
                    <input
                        className="w-full border rounded-full py-2 px-4 mr-2"
                        type="text"
                        placeholder="Type your message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full"
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
