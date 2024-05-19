import React from 'react';
import { Header } from '../components/index.js';
import useUser from '../hooks/useUser.js';

const Dashboard = () => {
  const user = useUser();

  return (
    <>
      <Header />
      <div className="min-h-screen bg-slate-500">
        <p>Dashboard Page</p>
        {user && (
          <div>
            <p>Name: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Tags:</p>
            <ul>
              {user.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="min-h-screen bg-slate-400">
        <p>Dashboard Page</p>
      </div>
    </>
  );
};

export default Dashboard;
