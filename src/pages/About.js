import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>Welcome to the About Page</h1>
      <p>This is the sub landing page of the application.</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default About;