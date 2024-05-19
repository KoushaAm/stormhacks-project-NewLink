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
        <p className="text-4xl font-bold mb-8">My Dashboard</p>{' '}
        {/* Adjusted text size and made it bold */}
        {user && (
          <div className="text-center">
            <p className="text-xl p-2 font-bold">{user.username}</p>{' '}
            {/* Adjusted text size and made it bold */}
            <p className="text-xl p-2 font-bold">{user.email}</p>{' '}
            {/* Adjusted text size and made it bold */}
            <p className="text-xl p-2 font-bold">My tags:</p>{' '}
            {/* Adjusted text size and made it bold */}
            <div className="flex flex-wrap justify-center">
              {' '}
              {/* Added flex-wrap and justify-center classes */}
              {user.tags.map((tag, index) => (
                <span key={index} className={`px-4 py-2 rounded-2xl m-2 ${getRandomColor()}`}>
                  {' '}
                  {/* Applied dynamic color class */}
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="min-h-screen bg-slate-400 flex items-center justify-center">
        <p className="text-4xl font-bold">Dashboard Page</p>
      </div>
    </>
  );
};

export default Dashboard;
