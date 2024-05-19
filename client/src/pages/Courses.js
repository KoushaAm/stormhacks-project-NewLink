import React from 'react';
import { Header } from '../components/index.js';

const courses = [
  {
    id: 1,
    name: 'CMPT 120',
    description: 'Introduction to Computing Science and Programming I',
  },
  {
    id: 2,
    name: 'CMPT 130',
    description: 'Introduction to Computer Science and Programming II',
  },
  {
    id: 3,
    name: 'CMPT 225',
    description: 'Data Structures and Programming',
  },
  {
    id: 4,
    name: 'CMPT 276',
    description: 'Introduction to Software Engineering',
  },
  {
    id: 5,
    name: 'CMPT 300',
    description: 'Operating Systems I',
  },
  {
    id: 6,
    name: 'CMPT 354',
    description: 'Database Systems I',
  },
  {
    id: 7,
    name: 'CMPT 371',
    description: 'Data Communications and Networking',
  },
];

const CourseCard = ({ course }) => {
  return (
    <div className="bg-red-700 p-12 m-2 rounded-3xl shadow-2xl">
      <h2 className="font-bold text-white text-2xl mb-2">{course.name}</h2>
      <p className='text-white'>{course.description}</p>
    </div>
  );
};

const Courses = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen p-4">
        <h1 className="text-center text-5xl font-bold my-12">SFU Courses</h1>
        <div className="mx-32 grid grid-cols-1 md:grid-cols-3 gap-4">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
