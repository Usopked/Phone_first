import React from 'react';
import luffy from '../luffy.svg';
import { useNavigate } from 'react-router-dom';
import { useGlobalDispatch } from '../context/GlobalState';
import './Ques.css';  // 스타일 파일 임포트

const Ques1 = () => {
  const dispatch = useGlobalDispatch();
  const navigate = useNavigate();

  const handleOptionClick = (weight) => {
    dispatch({ type: 'ADD_WEIGHT', payload: weight });
    navigate('/ques2');
  };

  return (
    <div className="ques-container">
      <img src={luffy} className="App-luffy" alt="luffy" />
      <h1 className="ques-title">Question 1</h1>
      <div className="button-container">
        <button onClick={() => handleOptionClick(1)} className="custom-button">Option 1</button>
        <button onClick={() => handleOptionClick(2)} className="custom-button">Option 2</button>
        <button onClick={() => handleOptionClick(3)} className="custom-button">Option 3</button>
        <button onClick={() => handleOptionClick(4)} className="custom-button">Option 4</button>
      </div>
    </div>
  );
};

export default Ques1;