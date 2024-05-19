import React from 'react';
import { Header } from '../components/index.js';
import { Link } from 'react-router-dom';
import useUser from '../hooks/useUser.js';

const useEvents = () => {
  // TODO: Retrieve these events from the backend
  const events = [
    {
      id: 1,
      title: 'Lunch at the Park',
      description: 'Join us for a fun lunch at the park!',
      tags: ['food', 'outdoors'],
      date: '2022-12-01',
      time: '12:00',
    },
    {
      id: 2,
      title: 'Study Group',
      description: 'Study group for all computer science students.',
      tags: ['sfu', 'study', 'education', 'computer science'],
      date: '2022-12-02',
      time: '14:00',
    },
    // ...other events
  ];

  return events;
};

const useTagColors = () => {
  // TODO: Retrieve these colors from the backend
  const tagColors = {
    food: '#FF6347', // Tomato
    outdoors: '#FFD700', // Gold
    study: '#32CD32', // LimeGreen
    education: '#1E90FF', // DodgerBlue
    'computer science': '#9370DB', // MediumPurple
    sfu: '#FFC0CB', // Pink
    // ...other colors
  };

  return tagColors;
};

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
      <div className="min-h-screen bg-slate-500 p-4 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4 text-center">Connect</h1>
        <p className="text-center">
          Welcome, {user.username}! Create events, join existing ones, and connect with people who
          share your interests.
        </p>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-2 text-center">Create Event</h2>
          <Link to="/create-event" className="bg-blue-500 text-white px-4 py-2 rounded self-center">
            Create New Event
          </Link>
        </div>
        <div className="mt-8 w-full overflow-auto md:overflow-visible">
          <h2 className="text-xl font-bold mb-2 text-center">Posted Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {events.map((event, index) => (
              <div key={event.id} className="bg-white p-4 rounded mb-4">
                <h3 className="text-lg font-bold">{event.title}</h3>
                <p>Date: {event.date}</p>
                <p>Time: {event.time}</p>
                <p>Description: {event.description}</p>
                <div className="flex flex-wrap">
                  {event.tags.map((tag, i) => (
                    <span
                      key={i}
                      style={{ backgroundColor: tagColors[tag] }}
                      className="text-white px-2 py-1 rounded mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/event/${event.id}`}
                  className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded"
                >
                  View Event
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Connect;
