import React from 'react';
import { Header } from '../components/index.js';
import useUser from '../hooks/useUser.js';

const Dashboard = () => {
  const user = useUser();

  // Function to generate a random color from a predefined list
  const getRandomColor = () => {
    const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-4xl font-bold mb-8">Dashboard Page</p> 
        {user && (
          <div className="text-center">
            <p className="text-xl font-bold">{user.username}</p> 
            <p className="text-xl font-bold">{user.email}</p> 
            <p className="text-xl font-bold">My Tags</p>
            <div className="flex flex-wrap justify-center"> 
              {user.tags.map((tag, index) => (
                <span key={index} className={`px-4 py-2 rounded-2xl m-2 ${getRandomColor()}`}> 
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="min-h-screen bg-slate-400 flex items-center justify-center">
        <p className="text-4xl font-bold">Dashboard Page</p> {/* Adjusted text size and made it bold */}
      </div>
    </>
  );
};

export default Dashboard;
