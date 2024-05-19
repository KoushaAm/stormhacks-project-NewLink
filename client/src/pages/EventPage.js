import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/index.js';
import { Link } from 'react-router-dom';
import useUser from '../hooks/useUser.js';
import { useEvents } from '../hooks/useEvents.js';
import { useTagColors } from '../hooks/useTagColors.js';

const EventPage = () => {
  const { id } = useParams();
  const user = useUser();
  const events = useEvents();
  const tagColors = useTagColors();

  const event = events.find((event) => event.id === Number(id));

  const [interested, setInterested] = useState(false);
  const [comment, setComment] = useState('');

  const handleInterest = () => {
    if (user) {
      setInterested(!interested);
    }
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Submit the comment
  };

  if (!event) {
    return <p>Event not found</p>;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <div className="max-w-2xl mx-auto p-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
            <p className="text-gray-700 text-sm">{event.description}</p>
            <div className="mt-4">
              <div className="flex items-center">
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7m-16 0a2 2 0 012-2h12a2 2 0 012 2m-6 0v12"
                  />
                </svg>
                <span className="mx-3 text-sm text-gray-500">{event.date}</span>
              </div>
              <div className="flex items-center mt-2">
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <span className="mx-3 text-sm text-gray-500">{event.time}</span>
              </div>
            </div>
            <button
              onClick={handleInterest}
              className={`mt-4 inline-block px-6 py-2 mr-4 rounded-full ${interested ? 'bg-green-500' : 'bg-blue-500'} text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-lg`}
            >
              {interested ? 'Interested' : 'Show Interest'}
            </button>
            <Link
              to="/connect"
              className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-2xl"
            >
              Back to Events
            </Link>
          </div>
        </div>
        <div className="mt-8 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">Discussion</h3>
            <form onSubmit={handleCommentSubmit}>
              <textarea
                className="w-full p-2 rounded border border-gray-300 mb-2"
                value={comment}
                onChange={handleCommentChange}
                placeholder="Add a comment..."
              />
              <button
                type="submit"
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded-2xl"
              >
                Post Comment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;