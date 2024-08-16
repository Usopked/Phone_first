import React from 'react';
import logo from '../logo.svg';
import { useNavigate } from 'react-router-dom';
import { useGlobalDispatch } from '../context/GlobalState';

const Ques3 = () => {
  const dispatch = useGlobalDispatch();
  const navigate = useNavigate();

  const handleOptionClick = (weight) => {
    dispatch({ type: 'ADD_WEIGHT', payload: weight });
    navigate('/');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f7fafc', textAlign: 'center' }}>
      <img src={logo} className="App-logo" alt="logo" />
      <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#2b6cb0' }}>
        Question 3
      </h1>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button onClick={() => handleOptionClick(1)} style={{ padding: '1rem', backgroundColor: '#3182ce', color: 'white', border: 'none', borderRadius: '0.375rem' }}>
          Option 1
        </button>
        <button onClick={() => handleOptionClick(2)} style={{ padding: '1rem', backgroundColor: '#3182ce', color: 'white', border: 'none', borderRadius: '0.375rem' }}>
          Option 2
        </button>
        <button onClick={() => handleOptionClick(3)} style={{ padding: '1rem', backgroundColor: '#3182ce', color: 'white', border: 'none', borderRadius: '0.375rem' }}>
          Option 3
        </button>
        <button onClick={() => handleOptionClick(4)} style={{ padding: '1rem', backgroundColor: '#3182ce', color: 'white', border: 'none', borderRadius: '0.375rem' }}>
          Option 4
        </button>
      </div>
    </div>
  );
};

export default Ques3;