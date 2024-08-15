import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f7fafc', textAlign: 'center' }}>
      <img src={logo} className="App-logo" alt="logo" />
      <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#2b6cb0' }}>
        Welcome to the About Page
      </h1>
      <p style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#4a5568', marginBottom: '2rem' }}>
        This is the sub landing page of the application.
      </p>
      <Link to="/" style={{ color: '#3182ce', textDecoration: 'none', padding: '0.5rem 1rem', border: '1px solid #3182ce', borderRadius: '0.375rem', fontWeight: 'bold', backgroundColor: 'white' }}>
        Home
      </Link>
    </div>
  );
};

export default About;

