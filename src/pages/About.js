import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">Welcome to the About Page</h1>
      <p className="text-lg font-bold text-gray-700 mb-8">This is the sub landing page of the application.</p>
      <Link to="/" className="text-blue-500 hover:underline">
        Home
      </Link>
    </div>
  );
};

export default About;