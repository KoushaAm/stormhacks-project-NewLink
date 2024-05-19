import React from 'react';
import { Header } from '../components/index.js';
import { Link } from 'react-router-dom';
import useUser from '../hooks/useUser.js';
import { useEvents } from '../hooks/useEvents.js';
import { useTagColors } from '../hooks/useTagColors.js';

const Connect = () => {
  const user = useUser();
  const events = useEvents();
  const tagColors = useTagColors();

  if (!user) {
    return <p>Please log in to view this page.</p>;
  }

  return (
    <>
      <Header />
      <div className="min-h-screen p-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4 text-center">Connect</h1>
        <p className="text-center">
          Welcome, <strong>{user.username}!</strong> <br />
          Create events, join existing ones, and connect with people who share your interests.
        </p>
        <div className="mt-8 w-full overflow-auto md:overflow-visible">
          <h2 className="text-xl font-bold mb-2 text-center">Posted Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-32">
            {events.map((event, index) => (
              <div key={event.id} className="bg-red-700 p-12 m-2 rounded-3xl shadow-2xl ">
                <h3 className="text-xl font-bold text-black">{event.title}</h3>
                <p className="text-black">Date: {event.date}</p>
                <p className="text-black">Time: {event.time}</p>
                <details className="mb-4">
                  <summary className="text-black cursor-pointer">Description</summary>
                  <p className="text-black">{event.description}</p>
                </details>
                <div className="flex items-center flex-wrap">
                  {event.tags.map((tag, i) => (
                    <span
                      key={i}
                      style={{ backgroundColor: tagColors[tag] }}
                      className="text-white px-2 py-1 rounded-2xl mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/connect`}
                  className="mt-2 inline-block bg-blue-900 text-white px-4 py-2 rounded-2xl"
                >
                  View Event
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 mb-10">
          <h2 className="text-xl font-bold mb-2 text-center">Create Event</h2>
          <Link to="/connect" className="bg-blue-500 text-white px-4 py-2 rounded-2xl self-center">
            Create New Event
          </Link>
        </div>
      </div>
    </>
  );
};

export default Connect;
