import React from 'react';
import luffy from '../../luffy.svg';
import { useNavigate } from 'react-router-dom';
import { useGlobalDispatch } from '../../context/GlobalState';
import './Ques.css';

const Ques8 = () => {
  const dispatch = useGlobalDispatch();
  const navigate = useNavigate();

  const handleOptionClick = (weight) => {
    dispatch({ type: 'ADD_WEIGHT', payload: weight });
    navigate('/ques9');
  };

  return (
    <div className="ques-container">
      <img src={luffy} className="App-luffy" alt="luffy" />
      <h1 className="ques-content">다른 사람들이 주목할 정도로 너무 느리게 움직이거나 말을 함
또는 반대로 평상시보다 많이 움직여서, 너무 안절부절 못하거나 들떠 있음</h1>
      <div className="button-container">
        <button onClick={() => handleOptionClick(0)} className="custom-button">전혀 방해받지 않았다.</button>
        <button onClick={() => handleOptionClick(1)} className="custom-button">며칠동안 방해받았다.</button>
        <button onClick={() => handleOptionClick(2)} className="custom-button">7일 이상 방해받았다.</button>
        <button onClick={() => handleOptionClick(3)} className="custom-button">거의 매일 방해받았다.</button>
      </div>
    </div>
  );
};

export default Ques8;