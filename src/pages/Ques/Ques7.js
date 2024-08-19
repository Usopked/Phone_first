import React from 'react';
import luffy from '../../luffy.svg';
import { useNavigate } from 'react-router-dom';
import { useGlobalDispatch } from '../../context/GlobalState';
import './Ques.css';

const Ques7 = () => {
  const dispatch = useGlobalDispatch();
  const navigate = useNavigate();

  const handleOptionClick = (weight) => {
    dispatch({ type: 'ADD_WEIGHT', payload: weight });
    navigate('/ques8');
  };

  return (
    <div className="ques-container">
      <img src={luffy} className="App-luffy" alt="luffy" />
      <h1 className="ques-content">신문을 읽거나 텔레비전 보는 것과 같은 일에 집중하는 것이 어려움</h1>
      <div className="button-container">
        <button onClick={() => handleOptionClick(0)} className="custom-button">전혀 방해받지 않았다.</button>
        <button onClick={() => handleOptionClick(1)} className="custom-button">며칠동안 방해받았다.</button>
        <button onClick={() => handleOptionClick(2)} className="custom-button">7일 이상 방해받았다.</button>
        <button onClick={() => handleOptionClick(3)} className="custom-button">거의 매일 방해받았다.</button>
      </div>
    </div>
  );
};

export default Ques7;