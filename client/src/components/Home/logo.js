import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
    return (
        <div>
            <div className="flex items-center justify-center bg-red-600 mx-96 rounded">
                <div className="inline-flex items-center justify-center bg-red-600 p-4">
                    <h1>hi</h1>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2 }}
                        className="text-9xl font-bold text-white"
                        style={{ textShadow: '0 0 2px black' }}
                    >
                        SFU
                    </motion.h1>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="text-center text-lg p-4 text-gray-800">
                    <p>
                        This is a paragraph below the SFU heading.
                        <br />
                        You can add more text or content here as needed.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Logo;
